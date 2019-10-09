#!/usr/bin/node
//解析URL 全解析
const http = require('http'),
      log = console.log,
      qs = require('querystring'),
      url = require('url');
http.createServer((req,res)=>{
  //parseURL(req.url);//我们要传入的是url 他是一个字符串
  parseURL('https://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f');
  res.end('OK')
}).listen(8080)
function parseURL(strURL){
  var path = url.parse(strURL);//将一个字符串转换成对象并返回
  
  log('href:',path.href);
  log('protocol:',path.protocol);//协议
  log('auth:',path.auth);//用户名和密码
  log('hostname',path.hostname);//主机名
  log('port:',path.port);//端口号
  log('host:',path.host);
  log('pathname:',path.pathname);//路由
  log('search:',path.search);//?+查询字符串
  log('query:',path.query);//查询字符串
  log('hash',path.hash);//# 后面的内容

  log('URL parse:',path.pathname.split('/'));//把路由拆分出来，形成一个数组
  log('QueryString parse:',qs.parse(path.query));//把查询字符串转换为JSON对象
  log('object url.parse:',path);
}
