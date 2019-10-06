#!/usr/bin/node

const http = require('http'),
      city = process.argv[2]||'石家庄',
      log = console.log;

var addr = 'http://v.juhe.cn/weather/index?cityname='+city+'&key=b0e8a59bd2f088e98a2fef7cabdbe787';

//global.encodeURI(url) 对uri组件进行编码
//log(addr);
//log(global.encodeURI(addr));
http.get(global.encodeURI(addr),function(res){
  //打印起始行
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

  //打印响应头
  console.log(res.headers);

  var weather = '';

  res.on('data',function(data){
    weather += data;
  })
  

  res.on('end',function(){
   // console.log(weather);
    weather = JSON.parse(weather);
    log('最低温度-最高温度',weather.result.today.temperature)
  })
})
