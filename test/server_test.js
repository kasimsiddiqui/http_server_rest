'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

require('../server');

describe('server test', function() {
  it('should respond to a get request', function(done) {
    chai.request('localhost:3000')
      .get('/greet/kasim')
      .end(function(err, res) {
        expect(res.status).to.eql(200);
        expect(res.body).to.eql('Hello Kasim');
        done();
      });
  });

  it('do a post greet', function(done) {
    chai.request('localhost:3000')
      .post('/greet')
      .send({name: 'Kasim'})
      .end(function(err, res) {
        expect(res.body.greet).to.eql('Hello Kasim');
        done();
      });
  });

  it('tell the server time', function(done) {
    chai.request('localhost:3000')
      .get('/time')
      .end(function(err, res) {
        expect(res.status).to.eql(200);
        var d = new Date();
        expect(res.body).to.eql(d.toString());
        done();
      });
  });
});
