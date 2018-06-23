'use strict';
const glob = require('glob');
const fs = require('fs');

exports.plugin = {
  name: 'fetch-output',
  register(server) {
    server.route({
      method: 'GET',
      path: '/api/fetch-output',
      options: {
        cors: {
          origin: ['*'],
        },
      },
      handler: (request, h) => {
        console.log(request.query);

        const outputFile = glob.sync(`${request.query.filePath}/*.out`);
        if (outputFile.length === 0) {
          return h.response('Could not find file to retrieve').code(412);
        }
        const fname = outputFile[0];

        const out = fs.readFileSync(fname, { encoding: 'UTF-8' });

        return h.response(out);
      }
    });
  }
}