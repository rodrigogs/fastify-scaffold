#!/usr/bin/env node

const debug = require('debug')('bin:fork');
const cluster = require('cluster');

const cpuCount = require('os').cpus().length;

cluster.setupMaster({ exec: './bin/www' });

for (let i = 0; i < cpuCount; i += 1) cluster.fork();

cluster.on('exit', (worker) => {
  debug(`Worker ${worker.id} died`);
  cluster.fork();
});
