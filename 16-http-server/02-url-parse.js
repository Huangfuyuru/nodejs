#!/usr/bin/node
//解析URL 只负责解析path中的内容
const http = require('http'),
      log = console.log,
      qs = require('querystring'),
      url = require('url');
http.createServer((req,res)=>{
  log('HTTP request URL:',req.url);
  res.end('OK')
}).listen(8080)
