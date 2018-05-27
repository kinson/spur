'use strict';

const Path = require('path');
const fs = require('fs');
const getPragmas = require('../../lib/customParser');
const generateSbatch = require('../../lib/generateSbatch');

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
        const input = request.payload.file.toString('utf-8');
        const pragmas = getPragmas(input);
        const sbatch = generateSbatch(pragmas, 'first.c');

        return h.response(sbatch).code(202);
      }
    });
  }
}