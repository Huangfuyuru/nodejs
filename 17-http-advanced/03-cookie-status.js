#!/usr/bin/node
const http = require('http'),
      log = console.log;

var total = 1;//server requested times 服务器被请求的次数
var count = 1;
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log('');
  
  if(req.url == '/favicon.ico') return;
  log('Im required %d',total++);
  if(typeof req.headers.cookie !== 'undefined'){
    var data = req.headers.cookie.split('=');
    count = Number(data[1])+1;
  }

  res.setHeader('Set-cookie',[`count=${count};max-age=1000`]);
  
  res.end(`total:${total}`);
}).listen(8080);
