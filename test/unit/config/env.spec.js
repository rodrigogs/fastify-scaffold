const chai = require('chai');

const Env = require('../../../src/config/env');

chai.should();

beforeEach(() => {
  Env.NODE_ENV = 'development';
  Env.PORT = 3000;
});

suite('Env', () => {
  suite('PORT', () => {
    test('should return the default port', async () => {
      Env.PORT.should.be.equal(3000);
    });

    test('should update port value', async () => {
      Env.PORT = 9000;
      Env.PORT.should.be.equal(9000);
    });

    test('should return the default node environment', async () => {
      Env.NODE_ENV.should.be.equal('development');
    });

    test('should update node environment value', async () => {
      Env.NODE_ENV = 'test';
      Env.NODE_ENV.should.be.equal('test');
    });
  });
});
