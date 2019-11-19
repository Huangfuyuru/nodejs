// #!/usr/bin/node

// const http = require('http'),
//       constellations = process.argv[2],
//       log = console.log;

// var addr = 
//  'http://web.juhe.cn:8080/constellation/getAll?consName='+constellations+'&type=today&key=e84cd07412c1d6518bc77a7a1bd13665';

// //global.encodeURI(url) 对uri组件进行编码
// //log(addr);
// //log(global.encodeURI(addr));
// http.get(global.encodeURI(addr),function(res){
//   //打印起始行
//  // console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

//   //打印响应头
//   //console.log(res.headers);

//   var c = '';

//   res.on('data',function(data){
//     c += data;
//   })
  

//   res.on('end',function(){
//    // console.log(c);
//     c = JSON.parse(c);
//     log(constellations);
//     log("幸运数字",c.number);
//     log("幸运颜色",c.color);
//     log("今日概述",c.summary);
//     //log('最低温度-最高温度',weather.result.today.temperature)
//   })
// })


var http = require('http'),
    log = console.log,
    constellations = process.argv[2];
var addr = 'http://web.juhe.cn:8080/constellation/getAll?consName='+constellations+'&type=today&key=e84cd07412c1d6518bc77a7a1bd13665';
http.get(global.encodeURI(addr),function(res){
  var a = '';
  res.on('data',function(data){
    a += data;
  })
  res.on('end',function(){
    var b = JSON.parse(a);
    log(b.number)
  })
})