#!/usr/bin/node
function longTask(){
  var num = 0;
  for(var i=0;i<10000;i++){
    for(var j=0;j<10000;j++){
      num +=i*j;
    }
  }
  return num;
}
//记录程序时间
console.time('Time');//开始计时 console.time('字符串');
var n=longTask();
console.timeEnd('Time');//结束计时 console.timeEnd('相同的字符串'),会自动出数字
console.log('n = %d',n);

