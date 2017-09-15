const getEnv = name => process.env[name.toUpperCase()];

class Env {
  /**
   * @return {string}
   * @constructor
   */
  static get NODE_ENV() {
    return getEnv('node_env') || 'development';
  }

  /**
   * @param {string} value
   * @constructor
   */
  static set NODE_ENV(value) {
    process.env.NODE_ENV = value;
  }

  /**
   * @return {number}
   * @constructor
   */
  static get PORT() {
    return Number(getEnv('port')) || 3000;
  }

  /**
   * @param {number} value
   * @constructor
   */
  static set PORT(value) {
    process.env.PORT = value;
  }
}

module.exports = Env;
