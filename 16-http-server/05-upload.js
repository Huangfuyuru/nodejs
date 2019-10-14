#!/usr/bin/node
const http = require('http');
const items = [];
const url = require('url');
const qs = require('querystring');

http.createServer((req, res) =>{
    var html = '<!DOCTYPE html><html><head><title>TODO LIST</title><head><body><h1>TODO LIST</h1><ul>items.map(function(it){return <li>it</li>}).join('\n')</ul><form method="GET" action="/"><input type="text" name="item"><input type="submit" value="submit"></form></body></html>';
      
    if(req.url === '/') {
      res.writeHead(200, {
       'Content-Type': 'text/html',
       'Content-Lenght': Buffer.byteLength(html,'utf8')
        
      });
            
    } else {
      var it = qs.parse(url.parse(eq.url).parse);
      if(typeof it !== 'undefined'){
        items.push(it)
      }
      
                    
    }
res.end(html)
}).listen(8080);
