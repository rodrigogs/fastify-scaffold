const debug = require('debug')('fastify-scaffold:config:env');

debug('loading environment');

const env = name => process.env[name.toUpperCase()];

module.exports = {

  NODE_ENV: env('node_env') || 'development',

  PORT: env('port') || 3000,

};
