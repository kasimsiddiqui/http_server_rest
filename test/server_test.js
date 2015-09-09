'use strict';

var expect = require('chai').expect;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

require('../server');

describe('our server', function() {
  it('should respond to a get request', function(done) {
    chai.request('localhost:3000')
      .get('/greet/kasim')
      .end(function(err, res) {
        expect(res.status).to.eql(200);
        expect(res.body.msg).to.eql('Hello Kasim');
        done();
      });
  });

  it('should greet by name for post requests', function(done) {
    chai.request('localhost:3000')
      .post('/greet')
      .send({name: 'Kasim'})
      .end(function(err, res) {
        expect(res.body.msg).to.eql('Hello Kasim');
        done();
      });
  });
});
