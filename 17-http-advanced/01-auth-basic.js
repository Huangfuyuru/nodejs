#!/usr/bin/node
const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
 // log(`${req.method} ${req.url} ${req.httpVersion}`);
 // log(req.headers);

  switch(req.url){
    case '/':
      sendNormalMsg(res);
      break;

    case '/admin':
      sendSecretMsg(req,res);
      break;

    default:
      sendErrorMsg(res);

  }
}).listen(8080);

//将authorization中的信息解析出来
//是base64编码
function userNamePasswd(str){
  log('str',str);
  var msg = str.split(' ');
  var account = new Buffer(msg[1],'base64');
  msg = account.toString('utf8').split(':');

  return{
    userName:msg[0],
    passWord:msg[1]
  }

}

function sendNormalMsg(res){
  res.end('Good Day,Haha!')
}

function sendSecretMsg(req,res){
  //用户名，密码信息保存在请求头的authorization
  var auth = req.headers.authorization;
  //log('外',auth);
  
  //如果req.headers.authorization 也就是说有用户名和密码
  //则进行验证用户密码的正确性
  if(auth){
    //log('内',auth)
    var usr = userNamePasswd(auth);
    log(`userName:${usr.userName},passWord:${usr.passWord}`);
    if(usr.userName === 'wangding' && usr.passWord === '123'){
      res.end('OK right');
      return;
    }
  }
  
  //如果没有authotization
  //服务端向客户端发送401请求，和WWW-...字段用来告诉
  //客户端要登陆
  res.writeHead(401,{'WWW-Authenticate':'Basic'});
  res.end('who are you')

}

function sendErrorMsg(res){
  res.statusCode = 404;
  res.end('404 Error!')
}
