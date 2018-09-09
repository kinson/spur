'use strict';

const path = require('path');
const fs = require('fs');
const os = require('os');
const hpc = require('../../lib/transferFiles');
const config = require('../../../config');
const Boom = require('boom');

const getPragmas = require('../../lib/customParser');
const generateSbatch = require('../../lib/generateSbatch');

function creatSbatchForTestRun(fpath, partition, fileName) {
  const source = fs.readFileSync(`${fpath}/${fileName}`, {encoding: 'UTF-8'});

  const pragmas = {
    ...getPragmas(source),
    'PARTITION': '-p ' + partition,
    'EMAIL': config.webhookEmail 
  };
  const sbatch = generateSbatch(pragmas, fileName, true);

  fs.writeFileSync(`${fpath}/testRun.sbatch`, sbatch, { encoding: 'UTF-8' });
}

exports.plugin = {
  name: 'run-test-file',
  register(server) {
    server.route({
      method: 'POST',
      path: '/api/run',
      options: {
        cors: {
          origin: ['*'],
        },
      },
      handler: (request, h) => {
        
        // path
        const filePath = request.payload.filePath;

        // partition
        const partition = request.payload.partition;

        // file name
        const fileName = request.payload.fileName;

        // create sbatch for test
        creatSbatchForTestRun(filePath, partition, fileName);

	if (process.env.NODE_ENV === 'development' && config.hpcDisabled) {
	  return h.response({ message: 'ok', jobId: '1'});
	}

        const hpcHelper = hpc(filePath, fileName);

        // attempt to send source and sbatch to hpc
        try {
          hpcHelper.transferFiles();
        } catch (e) {
          return Boom.expectationFailed('Failed to transfer source to HPC');
        }
        
        // attempt to compile source
        try {
          hpcHelper.testCompile();
        } catch (e) {
          // console.log(e);
          return Boom.expectationFailed('Failed to compile source code');
        }
        
        // submit sbatch
        let jobId = '';
        try {
          jobId = hpcHelper.submitSbatch();
        } catch (e) {
          return Boom.expectationFailed('Failed to submit batch file to slurm');
        }
        
        return h.response({ message: 'ok', jobId });
      }
    });
  }
}
