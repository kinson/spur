'use strict';

exports.plugin = {
  name: 'receive-mail',
  register(server) {
    server.route({
      method: 'POST',
      path: '/api/receive-mail',
      options: {
        cors: {
          origin: ['*'],
        },
      },
      handler: (request, h) => {
        console.log('triggered');

        console.log(request.payload);

        return h.response('ok');
      }
    });
  }
}