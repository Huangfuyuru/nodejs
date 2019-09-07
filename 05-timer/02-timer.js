#!/usr/bin/node

console.log('start...');

var timeID = setInterval(loop,500);
var count = 0;
function loop(){
  count++;
  console.log('I will loop');
  if(6 === count){
    clearInterval(timeID);
  }
}
//方法二
//在3000毫秒的时候取消定时器
/*
setTimeout(function(){
  clearInterval(timeID);
},3000);
*/


