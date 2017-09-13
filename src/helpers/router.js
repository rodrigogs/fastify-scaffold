const debug = require('debug')('fastify-scaffold:helpers:routes');

const Router = {

  /**
   * @param {Object} app
   * @param {Object[]} routers
   * @param {String} routers.prefix
   * @param {Object[]} routers.routes
   * @param {String} [prefix='']
   */
  route: (app, routers, prefix = '') => {
    routers.forEach((router) => {
      if (router.routes instanceof Array) {
        return Router.route(app, router.routes, router.prefix);
      }

      if (router.routes instanceof Function) {
        debug('registering route');

        app.register(router.routes, { prefix: `${prefix || ''}${router.prefix || ''}` });
      }
    });
  },

};

module.exports = Router;
