'use strict';

require('dotenv').config();

const development = {
  webhookEmail: 'slurm@parse.samwhunter.com',
  authSecret: '',
  hpc: {
    ssh: {
      username: 'shunter',
      password: process.env.HPC_SSH_PASS
    }
  }
};

const production = {
  webhookEmail: 'slurm@parse.samwhunter.com',
  authSecret: 'SMU2018_Hunter%C0YLE',
  hpc: {
    ssh: {
      username: 'shunter',
      password: process.env.HPC_SSH_PASS
    }
  }
};

const config = {
  development,
  production
};

module.exports = config[process.env.NODE_ENV];
