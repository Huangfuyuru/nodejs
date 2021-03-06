#!/usr/bin/node
var stdin = process.stdin,
    stdout = process.stdout,
    fs = require('fs'),
    log = console.log;

const http = require('http');
var buf = {};
http.createServer((req,res)=>{
  //console.log(req.url);
  if(req.url === '/favicon.ico'){
    return;
  }
  var fileName = __dirname + req.url;
  log(fileName);
  if(!fs.existsSync(fileName)) {
    return;
  }
  
  if(!buf[fileName]){
    buf[fileName] = fs.readFileSync(fileName).toString('utf8')
  }
  
  res.end(buf[fileName]);
}).listen(8080)

console.log(process.pid);
