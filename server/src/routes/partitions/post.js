'use strict';

const Path = require('path');
const getOpenPartitions = require('../../lib/inspectQueue');
const config = require('../../../config');

exports.plugin = {
  name: 'get-partitions',
  register(server) {
    server.route({
      method: 'POST',
      path: '/api/partitions',
      options: {
        cors: {
          origin: ['*'],
        },
      },
      handler: (request, h) => {
	let openPartitions = {};
	if (process.env.NODE_ENV === 'development' && config.hpcDisabled) {
	  openPartitions = [
	    { name: 'standard-mem-s', description: 'A sample description', nodesAvailable: '35' },
	    { name: 'standard-mem-l', description: 'A sample description', nodesAvailable: '2' },
	    { name: 'high-mem-1', description: 'A sample description', nodesAvailable: '1' },
	    { name: 'mic', description: 'A sample description', nodesAvailable: '10' },
	  ];
	} else {
	  openPartitions = getOpenPartitions();
	}
        // const openPartitions = {};

        return h.response(openPartitions);
      }
    });
  }
}
