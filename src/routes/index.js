const debug = require('debug')('fastify-scaffold:routes:index');

debug('configuring routes');

const healthcheck = require('./healthcheck');
const v1 = require('./v1');

const routers = [
  {
    routes: healthcheck,
  },
  {
    prefix: '/v1',
    routes: v1,
  },
];

module.exports = routers;
