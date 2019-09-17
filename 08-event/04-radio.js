#!/usr/bin/node
//混合继承
const EventEmitter = require('events').EventEmitter;

function Radio(station){

 var self = this;

//复制基类里的方法
 for(var m in EventEmitter.prototype){
   this[m] = EventEmitter.prototype[m]
 }
 setTimeout(()=>{
   self.emit('play',station)
 },0);

 setTimeout(()=>{
   self.emit('stop',station)
 },5000)
}


module.exports = Radio;
