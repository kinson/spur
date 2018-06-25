
'use strict';

exports.plugin = {
  name: 'publish-message',
  register(server) {
    server.route({
      method: 'POST',
      path: '/api/publish-message',
      options: {
        cors: {
          origin: ['*'],
        },
      },
      handler: (request, h) => {
        server.publish('/job/1', { id: '1', status: request.payload.jobStatus});


        return h.response('ok');
      }
    });
  }
}
