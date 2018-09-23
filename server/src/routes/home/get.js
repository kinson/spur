'use strict';

const Path = require('path');

exports.plugin = {
  name: 'home-page',
  register(server) {
    server.route({
      method: 'GET',
      path: '/{path*}',
      options: {
        cors: true,
      },
      handler: {
        directory: {
          path: Path.join(__dirname, '../../../../spur-app/build'),
          listing: false,
          index: true
        }
      }
    });
  }
}
