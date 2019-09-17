#!/usr/bin/node


const Dog = require('./02-dog');

var taidi = new Dog('taidi',4);

var zangao = new Dog('zangao',10);

taidi.on('bark',onBark);//监听bark事件，产生一个回调函数

function onBark(){
  console.log('%s barked! energy:%s',this.getName(),this.getEnergy());
}
