const debug = require('debug')('fastify-scaffold:routes:healthcheck');

debug('configuring routes');

const HealthcheckController = require('../controllers/healthcheck');

const routes = (fastify, opts, next) => {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
            },
          },
        },
      },
    },
    handler: HealthcheckController.index,
  });

  next();
};

module.exports = routes;
