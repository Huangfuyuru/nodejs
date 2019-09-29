#!/usr/bin/node
const http = require('http'),
      addr = process.argv[2]||'http://www.sian.com/';

//递归实现
//如果返回的状态码是303 说明重定向，我们在继续找
//直到找到 
function get(addr){
  http.get(addr,function(res){
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

    console.log(res.headers);

    res.pipe(process.stdout);
  
    if(res.statusCode < 400 && res.statusCode >= 300){
      get(res.headers.location);
    }
  })
}

get(addr)
