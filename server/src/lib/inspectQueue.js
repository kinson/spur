'use strict';

var sys = require('util');
var execSync = require('child_process').execSync;

const config = require('../../config');

const accessString =  `sshpass -p ${config.hpc.ssh.password}`;
const { username, password } = config.hpc.ssh;

function getEmptyPartitions() {
  var partitions = [];
  var stdout = execSync(`${accessString} ssh ${username}@m2.smu.edu 'sinfo --states=idle -o "%P %D" | grep -v " 0"'`, {
    encoding: 'utf-8'
  });
  stdout.split('\n').forEach(function(line) {
    if (line.indexOf('PARTITION') == -1 && line !== '') {
      var l = line.replace('*', '').split(' ');
      partitions.push({
	name: l[0],
	nodesAvailable: l[1]
      });
    }
  });
  return partitions;
}

function massagePartitions(partitions) {
  const descriptions = require('./partitionTypes'); 

  return partitions.map(p => {
    const descriptionObject = descriptions.find(d => d.name === p.name);
    if (descriptionObject) {
      const { description } = descriptionObject;
      return Object.assign({}, p, { description });
    }
    return p;
  });
}

function getPartitionsWithDescription() {
  const open = getEmptyPartitions();
  return massagePartitions(open);
}

module.exports = getPartitionsWithDescription;
