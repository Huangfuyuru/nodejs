#!/usr/bin/node
//使用unref()方法自动销毁定时器,没有调用clearInterval();
console.log('start...');

var timeID = setInterval(loop,500);
timeID.unref();
function loop(){
  console.log('I will loop');
};
setTimeout(function(){
  console.log('game over');
},5000);


