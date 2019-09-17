#!/usr/bin/node
var stdin = process.stdin;
var stdout = process.stdout;
var fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{
  //console.log(req.url);
  if(req.url === '/favicon.ico'){
    return;
  }
  var fileName = __dirname + req.url;
  fs.createReadStream(fileName).pipe(res);
}).listen(8080)

console.log(process.pid);
