#!/usr/bin/node
//原型继承
//const EventEmitter = require('events');
//引入模块
const EventEmitter = require('events').EventEmitter;

//构造函数
function Dog(name,energy){
  var _name;
  var _energy;
  var that = this;
  EventEmitter.call(this);//调用基类的构造函数
  _name = name;
  _energy = energy;

  var timer = setInterval(()=>{
    if(_energy > 0){
      that.emit('bark');//触发事件
      _energy--;
    }else{
      clearInterval(timer);
    }
  },1000);

  this.getName = () => _name;
  this.getEnergy = () => _energy;

}
 
//这里不太懂,原型继承
Dog.prototype = EventEmitter.prototype;
//或者Dog.prototype = new EventEmitter();

module.exports = Dog;

