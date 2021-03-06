'use strict';

const SENDGRID_EMAIL = 'me@parse.samwhunter.com';

function getNameWithoutExtension(fileName) {
  return fileName.split('.')[0];
}

function generateSbatch(pragmas, fileName, forTest) {
  var outputString = '#!/bin/bash\n';
  outputString += '\n# set SLURM directives\n'
  
  
  // if the user does not include any pragmas in their code
  // use the set of default pragmas
  if (Object.keys(pragmas).length === 0) {
    pragmas = defaultPragmas;
  }

  Object.keys(pragmas).forEach(function (prag) {
    // if running the test suite override the email
    if (!forTest || (prag !== 'EMAIL' && prag !== 'EMAIL_TYPE')) {
      outputString += '#SBATCH ' + pragmas[prag] + '\n';
    }
  });

  if (forTest) {
    outputString += '#SBATCH --mail-user ' + SENDGRID_EMAIL;
    outputString += '\n#SBATCH --mail-type=all\n'
  }

  const execName = getNameWithoutExtension(fileName)
  const openMPExec = `${execName}_OpenMP`;
  const noOpenMPExec = `${execName}_NoOpenMP`;

  const filetype = fileName.split('.').pop();

  const compiler = filetype === 'cpp' ? 'g++ -std=c++11' : 'gcc';
  
  // module purge and module load
  outputString += '\n# remove all modules loaded in current workspace to start with clean slate';
  outputString += '\nmodule purge';
  outputString += '\n# load ' + filetype + ' compiler compatible with OpenMP into the workspace';
  outputString += '\nmodule load gcc-6.3\n\n';

  outputString += '# compile source file with OpenMP flag\n';
  outputString += `${compiler} ${fileName} -o ${openMPExec} -fopenmp\n`;
  if (forTest) {
    outputString += '\n# compile source file without OpenMP\n';
    outputString += `${compiler} ${fileName} -o ${noOpenMPExec}\n\n`;
  }
  outputString += '# make OpenMP-compiled file executable\n';
  outputString += 'chmod +x ' + openMPExec + ' \n';
  if (forTest) {
    outputString += 'chmod +x ' + noOpenMPExec + ' \n\n';
  }
  if (forTest) {
    outputString += '# time run time for each executable\n';
    outputString += 'echo time with openMP\n';
    outputString += `time ./${openMPExec}\n`;
    outputString += 'echo time without openMP\n';
    outputString += `time ./${noOpenMPExec}\n`;
  } else {
    outputString += '# execute the program\n';
    outputString += `./${openMPExec}\n`;
  }
  
  return outputString;
}

module.exports = generateSbatch;


