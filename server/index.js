'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');

const routes = require('./src/routes');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

server.options = {
  routes: {
    cors: true,
  },
};

const start = async () => {

  await server.register([
    require('inert'),
    require('nes')
  ]);

  server.subscription('/job/{id}');

  await server.register(routes);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

start();