#!/usr/bin/node
const http = require('http'),
      log = console.log,
      fs = require('fs');

http.createServer((req,res)=>{
    var file = __dirname + req.url;
    log(req.url);
  
  fs.readFile(file,(err,data)=>{
    if(err){
      log(err.message);
      res.statusCode = 404;
      res.end(err.message);
    }else{
      log(file);
      log(data.toString('utf8'));
      res.end(data)
    }
  })
}
).listen(8080)
