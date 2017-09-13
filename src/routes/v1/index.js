const debug = require('debug')('fastify-scaffold:routes:v1:index');

debug('configuring routes');

const example = require('./example');
const example2 = require('./example2');

const routers = [
  {
    prefix: '/example',
    routes: example,
  },
  {
    prefix: '/example2',
    routes: example2,
  },
];

module.exports = routers;
