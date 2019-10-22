#!/usr/bin/node
const http = require('http'),
      log = console.log;
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log('');
  
  //如果设置过cookie
  //那么以后，cookie会自动带在请求头中
  //如果请求头中有cookie解析一下
  if(typeof req.headers.cookie !== 'undefined'){
    var data = req.headers.cookie.split(';');
    log('data',data);
  }

  res.setHeader('Set-cookie',['name=wangding;max-age=1000','age=41']);
  
  //max-age:1000  给这个cookie加上了1000s的时间，是个长期
  res.end('OK');
}).listen(8080);
