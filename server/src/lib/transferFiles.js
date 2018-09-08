'use strict';

var sys = require('util');
var execSync = require('child_process').execSync;

const config = require('../../config');

const accessString =  `sshpass -p ${config.hpc.ssh.password}`;
const { username, password } = config.hpc.ssh;

function copyToHpc(filePath) {

  return {
    transferFiles: () => {
      var stdout = execSync(`${accessString} scp -r ${filePath} ${username}@m2.smu.edu:/users/${username}/buckaroo`, {
        encoding: 'utf-8'
      });
      return stdout;
    },
    testCompile: () => {
      const relativeHPCPath = filePath.split('/').pop();

      let execString = `${accessString} ssh ${username}@m2.smu.edu 'cd buckaroo/${relativeHPCPath} && module purge && module load gcc-6.3 && gcc *.c -fopenmp'`;

      var stdout = execSync(execString, {
        encoding: 'utf-8'
      });
      return stdout;
    },
    submitSbatch: () => {
      const relativeHPCPath = filePath.split('/').pop();

      let execString = `${accessString} ssh ${username}@m2.smu.edu 'cd buckaroo/${relativeHPCPath} && sbatch ./testRun.sbatch'`;

      var stdout = execSync(execString, {
        encoding: 'utf-8'
      });
      
      const jobId = stdout.replace('\n', '').split(/\s+/).pop();
      console.log(jobId);
      return jobId;
    },
    fetchOutput: () => {
      const relativeHPCPath = filePath.split('/').pop();

      let execString = `${accessString} ssh ${username}@m2.smu.edu 'cd buckaroo' ${relativeHPCPath} && cat *_*.out'`;

      var stdout = execSync(execString, {
        encoding: 'utf-8'
      });

      return stdout;
    }
  };
  
}

module.exports = copyToHpc;
