#!/usr/bin/node
const http = require('http'),
      log = console.log,
      qs = require('querystring'),
      url = require('url');
var items = ['jisoo'];//用来接收
http.createServer((req, res) =>{
  if(req.method=== 'GET' && req.url === '/'){
    res.writeHead(200,{  //可以用res.writeHead(状态码，一些)
      'Content-Type':'text/html'
    });
    log(req.headers);
    add(req,res);
  }else if(req.method === 'POST' && req.url === '/'){
    //提交数据
    var it = '';
    req.on('data',(data)=>{
      it += data
    })
    req.on('end',()=>{
      if(typeof it !== 'undefined'){
        items.push(qs.parse(it).item)
      }
      show(res)
    })
  }else{
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain');
    res.end('Resource not found!')
  }
}).listen(8080)

function add(req,res){
  var value = qs.parse(url.parse(req.url).query).item;
  if(typeof value !== 'undefined'){
    log(value);
    items.push(value);//把得到推进
  }
  show(res);
}

//join把数组中的所有元素放入一个字符串，通过指定的分隔符进行分割
function show(res){

  var html = '<!DOCTYPE html>\n'
              +'<html>\n'
              +'  <head>\n'
              +'    <meta charset="UTF-8">\n'
              +'    <title>Todo list</title>\n'
              +'  <head>\n'
              +'  <body>\n'
              +'    <h1>Todo List</h1>\n'
              +'    <ul>\n'
              + items.map(function(item){return '<li>'+item+'</li>'}).join('\n')
              +'    </ul>\n'
              +'    <form method="POST" action="/" />\n'
              +'    <input type="text" name="item"/>\n'
              +'    <input type="submit" value="Add Item"/>\n'
              +'    </form>\n'
              +'  </body>\n'
              +'</html>\n';
  res.end(html);
}
