#!/usr/bin/node
const http = require('http'),
      log = console.log,
      qs = require('querystring'),
      fs = require('fs');

var isLogin;
http.createServer((req,res)=>{
  if(typeof req.headers.cookie === 'undefined'){
    isLogin = false
  }else{
    isLogin = req.headers.cookie.split('=')[1]
  };

  if(req.method == 'GET'){
    if(isLogin){
      if(req.url == '/logout'){
        isLogin = false;
        showLogin(res)
      }
      showHome(res)
    }else{
      showLogin(res)
    }
  }

  if(req.method == 'POST' && req.url =='/login'){
    var str = '';
    req.on('data',(data)=>{
      str += data
    });
    req.on('end',()=>{
      var arr = qs.parse(str);
      if(arr.user === 'hf' && arr.password === '123'){
        isLogin=true;
        showHome(res);
      }else{
        showLogin(res)
      }
    })
  }
}).listen(8080);

function showLogin(res){
  var html = '<!DOCTYPE html>'
            + '<html>'
            + '  <head>'
            + '    <meta charset="UTF-8">'
            + '    <title>登录</title>'
            + '  </head>'
            + '  <body>'
            + '    <form method="post" action="/login">'
            + '       <p>用户名：<input type="text" name="user"></p>'
            + '       <p>密　码：<input type="password" name="password"></p>'
            + '       <p><input type="submit" value="登录"></p>'
            + '    </form>'
            + '  </body>'
            + '</html>';
  res.writeHead(200,{
    'Content-Type':'text/html',
    'Content-Length':Buffer.byteLength(html),
    'Set-cookie':`isLogin=${isLogin};max-age=600`
  });
  res.end(html)
}

function showHome(res){
  var html = fs.readFileSync('./home.html','utf8');
  res.writeHead(200,{
    'Content-Type':'text/html',
    'Content-Length':Buffer.byteLength(html),
    'Set-cookie':`isLogin=${isLogin};max-age=600`
  })
  res.end(html)
}