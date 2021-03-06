'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

require('../server');

describe('server test', function() {
  it('should respond to a get request', function(done) {
    chai.request('localhost:3000')
      .get('/greet/Kasim')
      .end(function(err, res) {
        expect(res.status).to.eql(200);
        expect(res.text).to.eql('Hello Kasim');
        done();
      });
  });

  it('do a post greet', function(done) {
    chai.request('localhost:3000')
      .post('/greet')
      .send({name: 'Kasim'})
      .end(function(err, res) {
        expect(res.text).to.eql('{"greet":"Hello Kasim"}');
        done();
      });
  });

  it('tell the server time', function(done) {
    chai.request('localhost:3000')
      .get('/time')
      .send()
      .end(function(err, res) {
        expect(res.status).to.eql(200);
        var d = new Date();
        expect(res.text).to.eql(d.toString());
        done();
      });
  });
});
