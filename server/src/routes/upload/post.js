'use strict';

const path = require('path');
const fs = require('fs');
const os = require('os');
const getPragmas = require('../../lib/customParser');
const generateSbatch = require('../../lib/generateSbatch');
const Boom = require('boom');


if (process.env.NODE_ENV !== 'development') {
  const SECRET_FOR_AUTH = 'SMU2018_Hunter%C0YLE';
}

const SECRET_FOR_AUTH = '';

exports.plugin = {
  name: 'upload-file',
  register(server) {
    server.route({
      method: 'POST',
      path: '/upload',
      options: {
        cors: {
          origin: ['*'],
        },
      },
      handler: (request, h) => {

        if (request.payload.secret !== SECRET_FOR_AUTH) {
          return Boom.forbidden('Not authorized');
        }
      
        const input = request.payload.file.toString('utf-8');
        let pragmas = {};

        const { sep } = path;

        const tmpDir = `${process.cwd()}/tmp`;

        if (!fs.existsSync(tmpDir)) {
          fs.mkdirSync(tmpDir);
        } 

        const fpath = fs.mkdtempSync(`${process.cwd()}/tmp/upload-`);

        fs.writeFileSync(`${fpath}/${request.payload.fileName}`, input, { encoding: 'UTF-8' });

        try {
          pragmas = getPragmas(input);
        } catch (err) {
          return Boom.badRequest(err.message);
        }

        const sbatch = generateSbatch(pragmas, request.payload.fileName);

        let tooLongToRun = false;
        const runTime = parseInt(pragmas.TIME.split(' ')[1]);
        if (runTime > 120) {
          tooLongToRun = true;
        }

        return h.response({
          sbatch,
          tooLongToRun,
          fpath
        }).code(202);
      }
    });
  }
}
