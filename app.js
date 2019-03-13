#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      qs = require('querystring'),
      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  var addr = url.parse(req.url).query;
  var rect = qs.parse(addr);
  
  var result = {
   'area':Number(rect.width)*Number(rect.height),
   'perimeter':2 * (Number(rect.width)+Number(rect.height))
  };
  log(rect.width,rect.height);
  res.end('{"code":200,"reason":"请求成功","result":{"aera"}}');
}).listen(8080);
