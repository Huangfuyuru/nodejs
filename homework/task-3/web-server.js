#!/usr/bin/node
const http = require('http'),
      log = console.log,
      fs = require('fs');

http.createServer((req,res)=>{
    var file = __dirname + req.url;
    log(file);
  
  fs.readFile(file,(err,data)=>{
    if(err){
      log(err.message);
      res.statusCode = 404;
      res.end(err.message);
    }else{
      log(file);
      res.writeHead(200,{
        'Content-Type':'text/html'
      })
      res.end(data)
    }
  })
}
).listen(8080)
