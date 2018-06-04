'use strict';

// var fs = require('fs');

function generateSbatch(pragmas, fileName) {
  var outputString = '#!/bin/bash\n';
  Object.keys(pragmas).forEach(function (prag) {
    outputString += '#SBATCH ' + pragmas[prag] + '\n';
  });
  
  outputString += '\nmodule purge\nmodule load gcc-6.3\n\n';
  outputString += 'gcc ' + fileName + ' -fopenmp\n';
  outputString += 'chmod +x ' + fileName + ' \n';
  outputString += 'sh a.out\n';
  
  // fs.writeFileSync('javascript_test.sbatch', outputString);
  return outputString;
}

module.exports = generateSbatch;


