#!/usr/bin/node
//nodejs中的继承
//使用 util模块的inherits
const EventEmitter = require('events').EventEmitter;

const util = require('util');

function Radio(station){
 EventEmitter.call(this);

 var self = this;
 
 setTimeout(()=>{
   self.emit('play',station);
   console.log('xixi')
   //station作为参数传入，当监听到play这个事件，会传入回调函数
 },0);

 setTimeout(()=>{
   self.emit('stop',station)
 },5000)
}

//util.inherits(子类，继承的父类)
util.inherits(Radio,EventEmitter);

module.exports = Radio;
