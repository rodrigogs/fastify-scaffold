const debug = require('debug')('fastify-scaffold:controllers:example2');

const IndexController = {

  /**
   * @api {get} / Example
   * @apiVersion 1.0.0
   * @apiName HealthCheck
   * @apiGroup Health
   * @apiPermission any
   *
   * @apiDescription Verify if the API server is running.
   *
   * @apiExample Example usage:
   * curl -i http://localhost:3000/
   */
  index: (request, reply) => {
    debug('executing index action');

    reply.send({ message: 'example2' });
  },

  /**
   * @api {get} / Example
   * @apiVersion 1.0.0
   * @apiName HealthCheck
   * @apiGroup Health
   * @apiPermission any
   *
   * @apiDescription Verify if the API server is running.
   *
   * @apiExample Example usage:
   * curl -i http://localhost:3000/
   */
  another: (request, reply) => {
    debug('executing another action');

    reply.send({ message: 'another example' });
  },

};

module.exports = IndexController;
