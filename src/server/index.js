const path = require('path');
const fs = require('fs');
const http = require('http');
const { helloMessage } = require('../common/greeting.js');

http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === '/message') {
    res.writeHead(200);
    res.end(helloMessage);
  }
  req.url += req.url === '/' ? 'index.html' : '';
  fs.readFile(path.resolve(process.argv[2]) + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8080);
