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
        let pragmas = {};
        try {
          pragmas = getPragmas(input);
        } catch (err) {
          return h.response(err.message).code(400);
        }
        const sbatch = generateSbatch(pragmas, 'first.c');

        return h.response(sbatch).code(202);
      }
    });
  }
}