'use strict';

var sys = require('util');
var execSync = require('child_process').execSync;

const config = require('../../config');

const accessString =  `sshpass -p ${config.hpc.ssh.password}`;
const { username, password } = config.hpc.ssh;

function getEmptyPartitions(callback) {
  var partitions = {};
  var stdout = execSync(`${accessString} ssh ${username}@m2.smu.edu 'sinfo --states=idle -o "%P %D" | grep -v " 0"'`, {
    encoding: 'utf-8'
  });
  stdout.split('\n').forEach(function(line) {
    if (line.indexOf('PARTITION') == -1 && line !== '') {
      var l = line.replace('*', '').split(' ');
      partitions[l[0]] = (l[1]);
    }
  });
  return partitions;
}

module.exports = getEmptyPartitions;
