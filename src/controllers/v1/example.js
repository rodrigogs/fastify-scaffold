const debug = require('debug')('fastify-scaffold:controllers:example');

const ExampleController = {

  /**
   * @api {get} v1/example/ Example
   * @apiVersion 1.0.0
   * @apiName Example
   * @apiGroup 
   * @apiPermission any
   *
   * @apiDescription Example.
   *
   * @apiExample Example usage:
   * curl -i http://localhost:3000/v1/example
   */
  index: (request, reply) => {
    debug('executing index action');

    reply.send({ message: 'example' });
  },

};

module.exports = ExampleController;
