const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const app = require('../../src/app');

chai.use(chaiAsPromised);
chai.should();

suite('app', () => {
  suite('start', () => {
    test('should start the application on port 8000 passing argument', async () => {
      const instance = await app(8000);

      instance.server.address().port.should.be.equal(8000);
      instance.close();
    });

    test('should fail to start with conflicting port', async () => {
      const instance = await app(8000);
      await app(8000).should.be.rejectedWith('listen EADDRINUSE :::8000');

      instance.close();
    });
  });
});
