const debug = require('debug')('fastify-scaffold:routes:v1:example');

debug('configuring routes');

const ExampleController2 = require('../../controllers/v1/example2');

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
    handler: ExampleController2.index,
  });

  fastify.route({
    method: 'GET',
    url: '/another',
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
    handler: ExampleController2.another,
  });

  next();
};

module.exports = routes;
