const debug = require('debug')('fastify-scaffold:app');
const app = require('fastify')();

debug('bootstrapping application');

const Router = require('./helpers/router');
const routes = require('./routes');
const env = require('./config/env');

Router.route(app, routes);

module.exports = () => new Promise((resolve, reject) => {
  const port = env.PORT || 3000;

  app.listen(port, (err) => {
    if (err) return reject(err);
    resolve(app);
  });
});
