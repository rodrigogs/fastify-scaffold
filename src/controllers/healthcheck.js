const debug = require('debug')('fastify-scaffold:controllers:healthcheck');

const HealthcheckController = {

  /**
   * @api {get} / Healthcheck
   * @apiVersion 1.0.0
   * @apiName Healthcheck
   * @apiGroup Status
   * @apiPermission any
   *
   * @apiDescription Verify if the API server is running.
   *
   * @apiExample Example usage:
   * curl -i http://localhost:3000/
   */
  index: (request, reply) => {
    debug('executing index action');

    reply.code(200).send({ status: 'ok' });
  },

};

module.exports = HealthcheckController;
