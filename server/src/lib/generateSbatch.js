'use strict';

// var fs = require('fs');

function getNameWithoutExtension(fileName) {
  return fileName.split('.')[0];
}

function generateSbatch(pragmas, fileName, forTest) {
  var outputString = '#!/bin/bash\n';
  Object.keys(pragmas).forEach(function (prag) {
    outputString += '#SBATCH ' + pragmas[prag] + '\n';
  });

  const execName = getNameWithoutExtension(fileName)
  const openMPExec = `${execName}_OpenMP`;
  const noOpenMPExec = `${execName}_NoOpenMP`;
  
  outputString += '\nmodule purge\nmodule load gcc-6.3\n\n';
  outputString += `gcc ${fileName} -o ${openMPExec} -fopenmp\n`;
  if (forTest) {
    outputString += `gcc ${fileName} -o ${noOpenMPExec}\n\n`;
  }
  outputString += 'chmod +x ' + openMPExec + ' \n';
  if (forTest) {
    outputString += 'chmod +x ' + noOpenMPExec + ' \n\n';
  }
  if (forTest) {
    outputString += `time ./${openMPExec}\n`;
    outputString += `time ./${noOpenMPExec}\n`;
  } else {
    outputString += `./${openMPExec}\n`;
  }
  
  return outputString;
}

module.exports = generateSbatch;


