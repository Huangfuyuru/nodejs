#!/usr/bin/node
const http = require('http'),
      log = console.log,
      qs = require('querystring'),
      fs = require('fs');

var isLogin;
http.createServer((req,res)=>{
  var data = '';
  
  if(typeof req.headers.cookie === 'undefined'){
    isLogin = false;
  }else{
    var pair = req.headers.cookie.split('=');
    isLogin = (pair[1] === 'true');
  }

  console.log(isLogin);

  if(req.method === 'POST' && req.url === '/login'){
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
      var account = qs.parse(data);
      if(account.user === 'wangding' && account.password === '123'){
        isLogin = 'true';
        showHome(res)
      }else{
        showLogin(res);
      }
    })
  }

  if(req.method === 'GET'){
    if(isLogin){
      if(req.url === '/logout'){
        isLogin = false;
        res.setHeader('Set-cookie', `login=${isLogin}; max-age=600`);
        showLogin(res);
      }else{
        showHome(res);
      }
    }else{
      showLogin(res);
    }
  }
  

}).listen(8080);

function showHome(res){
  var html = fs.readFileSync('./home.html','utf-8');
  /*
   var html='<!DOCTYPE html>'
            + '<html>'
            + '  <head>'
            + '    <meta charset="UTF-8">'
            + '    <title>home</title>'
            + '  </head>'
          + '    <body>'
          + '       <h1>This is home page, you are login!</h1>'
          + '       <a href="/logout">logout</a>'
          + '    </body>'
            + '</html>';
   */
   res.writeHead(200,{
     'Content-Type':'text/html',
     'Content-Length':Buffer.byteLength(html),
     'Set-cookie':`login=${isLogin};max-age=600`
   })
   res.end(html);

}
function showLogin(res){
  var html = fs.readFileSync('./login.html','utf-8');
  /*
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
  */
  res.writeHead(200,{
    'Content-Type':'text/html',
    'Content-Length':Buffer.byteLength(html)
  })
  res.end(html)
}

