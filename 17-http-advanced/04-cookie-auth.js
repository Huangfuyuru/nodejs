#!/usr/bin/node
const http = require('http'),
      log = console.log,
      fs = require('fs'),
      qs = require('querystring');

var islogin = false;
var login = fs.readFileSync('./login.html','utf8');
var home = fs.readFileSync('./home.html','utf8');
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log('');
  

  if(req.url === '/login' && req.method === 'POST'){
    var user = '';
    req.on('data',(data)=>{
      user += data
    })

    req.on('end',()=>{
      var usr = qs.parse(user);
      if(usr.username === 'wangding' && usr.password === '123'){
        islogin = true;
        res.setHeader('Set-Cookie',`login=${islogin}`)
        res.end(home);
      }else{
        res.end(login);
      }
    })
  } 

  if(req.url === '/logout' && req.method === 'GET'){
    islogin = false;
    res.setHeader('Set-Cookie',`login=${islogin}`);
    res.end(login);
    return;
  }
  

  
  if(typeof req.headers.cookie !== 'undefined'){
    var data = req.headers.cookie.split('=');
    islogin = data[1];
    if(islogin === 'true'){
      res.end(home);
    }else{
      res.end(login)
    }
  }

  res.end(login);
}).listen(8080);
