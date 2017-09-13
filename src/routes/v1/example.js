const debug = require('debug')('fastify-scaffold:routes:v1:example');

debug('configuring routes');

const ExampleController = require('../../controllers/v1/example');

const routes = (fastify, opts, next) => {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
          },
        },
      },
    },
    handler: ExampleController.index,
  });

  next();
};

module.exports = routes;
