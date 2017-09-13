const debug = require('debug')('fastify-scaffold:controllers:example2');

const IndexController = {

  /**
   * @api {get} v1/example2/ Example 2
   * @apiVersion 1.0.0
   * @apiName Example2
   * @apiGroup Examples
   * @apiPermission any
   *
   * @apiDescription Example 2.
   *
   * @apiExample Example usage:
   * curl -i http://localhost:3000/v1/example2
   */
  index: (request, reply) => {
    debug('executing index action');

    reply.send({ message: 'example2' });
  },

  /**
   * @api {get} v1/example2/another Another example
   * @apiVersion 1.0.0
   * @apiName Another example2
   * @apiGroup Examples
   * @apiPermission any
   *
   * @apiDescription Another example 2.
   *
   * @apiExample Example usage:
   * curl -i http://localhost:3000/v1/example2/another
   */
  another: (request, reply) => {
    debug('executing another action');

    reply.send({ message: 'another example' });
  },

};

module.exports = IndexController;
