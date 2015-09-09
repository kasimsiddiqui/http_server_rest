'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
  var path = req.url.split('/');

  if(path[1] === 'greet') {
    if(req.method === 'GET') {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.write('Hello ' + path[2]);
      return res.end();
    }

    else if (req.method === 'POST') {
      req.on('data', function(data) {
        var body = JSON.parse(data);
          res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.write(JSON.stringify({greet: 'Hello ' + body.name}));
        return res.end();
      });
    }

  } else if(path[1] === 'time') {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      var d = new Date();
      res.write(d.toString());
      return res.end();
  }

  else{
   res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
   res.write('not found');
   return res.end();
  }
});

server.listen(3000, function() {
console.log('server running...');
});
