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

suite('example2', () => {
  suite('/', () => {
    test('should return an example message', async () => {
      const response = await got(`http://localhost:${instance.server.address().port}/v1/example2`, { json: true });

      response.statusCode.should.be.equal(200);
      response.body.message.should.be.equal('example2');
    });
  });

  suite('/another', () => {
    test('should return another example message', async () => {
      const response = await got(`http://localhost:${instance.server.address().port}/v1/example2/another`, { json: true });

      response.statusCode.should.be.equal(200);
      response.body.message.should.be.equal('another example');
    });
  });
});
