#!/usr/bin/node

const http = require('http'),
      addr = process.argv[2]||'http://sample.wangding.in/web/one-div.html';

//客户端发出请求，http.get直接将方法设置为GET，并自动调用req.end()
//返回一个res
//res.httpVersion HTTP版本协议
//res.statusCode 状态码
//res.statusMessage 消息
http.get(addr,function(res){
  //打印起始行
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

  //打印响应头
  console.log(res.headers);

  //打印响应体
  res.pipe(process.stdout)
})
