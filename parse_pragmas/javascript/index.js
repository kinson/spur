'use strict';

var fs = require('fs');

var gatherPragmas = require('./customParser');
var generateSbatch = require('./generateSbatch');
var getEmptyPartitions = require('./inspectQueue');

function getFileContents(fileName) {

  if (!fileName || typeof fileName !== 'string' || fileName.indexOf('.c') === -1) {
    throw new Error('must specify valid file name');
  }
  var input = fs.readFileSync(process.argv[2], { encoding: 'utf-8' });

  return input;
}

var fileName = process.argv[2];
var input = getFileContents(fileName);
var pragmas = gatherPragmas(input);
generateSbatch(pragmas, fileName);
var availablePartition = getEmptyPartitions();

console.log(availablePartition);

