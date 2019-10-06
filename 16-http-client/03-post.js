#!/usr/bin/node

const http = require('http'),
      addr = 'http://localhost:8080/',
      url = require('url'),
      msg = process.argv[2];

//封装请求
//url.parser(url)将url字符串地址转为一个对象。
//这样我们就得到了一个对象，因为request接收的是这个对象的相关参数
var option = url.parse(addr);

//console.log(option);
//默认方法是get 我们要增加数据，所以用post方法
option.method = 'POST';
//console.log(option);

var req = http.request(option,function(res){
  //打印起始行
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

  //打印响应头
  console.log(res.headers);

  //打印响应体
  res.pipe(process.stdout)
})
//req.end()，使用http.request()时，必须始终调用req.end()来表示请求的结束
req.end(msg);
