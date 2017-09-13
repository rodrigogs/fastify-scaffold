const chai = require('chai');
const got = require('got');
const server = require('../../../fixture/server');

chai.should();

let instance;

before(async () => {
  instance = await server();
});

after(() => {
  instance.close();
});

suite('example', () => {
  suite('/', () => {
    test('should return an example message', async () => {
      const response = await got(`http://localhost:${instance.server.address().port}/v1/example`, { json: true });

      response.statusCode.should.be.equal(200);
      response.body.message.should.be.equal('example');
    });
  });
});
