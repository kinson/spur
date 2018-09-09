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
	   openPartitions = { 
	     'standard-mem-s': '35',
	     'standard-mem-l': '1',
	     htc: '26',
	     development: '3',
	     'medium-mem-1-s': '3',
	     'medium-mem-1-m': '1',
	     'medium-mem-2': '1',
	     'high-mem-1': '4',
	     mic: '38' 
	   };
	} else {
	  openPartitions = getOpenPartitions();
	}
        // const openPartitions = {};

        return h.response(openPartitions);
      }
    });
  }
}
