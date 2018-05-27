'use strict';

const glob = require('glob');

module.exports = glob.sync('./**/*.js', { cwd: __dirname })
  .filter((file) => typeof require(file).plugin !== 'undefined')
  .map((file) => require(file).plugin);