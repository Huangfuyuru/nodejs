#!/usr/bin/node
const http = require('http'),
      log = console.log,
      fs = require('fs'),
      url = require('url');

http.createServer((req,res)=>{
  var path = url.parse(req.url);
  var pathQuery = path.query;
  var file = __dirname;
  var fileitem = [];
  if(pathQuery != 'undefined'){
  switch(req.url){
    case '/list/':
      file += '/chapterList.html';
      break;
    case '/login/':
      file += '/login.html';
      break;
    case '/listmanager/':
      file += '/list.html';
      break;
    case '/addChapter/':
      file += '/addChapter.html';
      break;
    default:
      fileitem = req.url.split('/');
      for(var a = 2;a<fileitem.length;a++){
        var s = '/'+fileitem[a];
        file += s
      };
      break;
  }
  }
  log(pathQuery);
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
