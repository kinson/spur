'use strict';

var sys = require('util');
var execSync = require('child_process').execSync;

function copyToHpc(filePath) {

  return {
    transferFiles: () => {
      var stdout = execSync('scp -r ' + filePath + ' shunter@m2.smu.edu:/users/shunter/buckaroo', {
        encoding: 'utf-8'
      });
      return stdout;
    },
    testCompile: () => {
      const relativeHPCPath = filePath.split('/').pop();

      let execString = 'ssh shunter@m2.smu.edu';
      execString += ' \'cd buckaroo/' + relativeHPCPath;
      execString += ' && module purge && module load gcc-6.3';
      execString += ' && gcc *.c -fopenmp\'';

      var stdout = execSync(execString, {
        encoding: 'utf-8'
      });
      return stdout;
    },
    submitSbatch: () => {
      const relativeHPCPath = filePath.split('/').pop();

      let execString = 'ssh shunter@m2.smu.edu';
      execString += ' \'cd buckaroo/' + relativeHPCPath;
      execString += ' && sbatch ./testRun.sbatch\'';

      var stdout = execSync(execString, {
        encoding: 'utf-8'
      });
      
      const jobId = stdout.replace('\n', '').split(/\s+/).pop();
      console.log(jobId);
      return jobId;
    }
  };
  
}

module.exports = copyToHpc;