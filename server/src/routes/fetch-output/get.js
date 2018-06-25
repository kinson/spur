'use strict';
const hpc = require('../../lib/transferFiles');

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

        const hpcHelper = hpc(request.query.filePath);

        let out = '';
        try {
          out = hpcHelper.fetchOutput();
        } catch (error) {
          return h.response('Could not find file to retrieve').code(412);
        }

        return h.response(out);
      }
    });
  }
}
