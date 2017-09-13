const app = require('../../src/app');

let instance;

module.exports = async () => {
  if (!instance) instance = await app();

  return instance;
};
