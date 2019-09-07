#!/usr/bin/node
//实现延迟执行任务
//异步执行，先执行second
setTimeout(function(){
  console.log('first');
},1000);

console.log('second');


function Bomb(){
  this.message = "Bomb";
}

Bomb.prototype.explode = function(){
  console.log(this.message);
}

var bomb = new Bomb();

var timeID = setTimeout(bomb.explode.bind(bomb),2000);

//clearTimeout(timeID);  取消定时
