#!/usr/bin/node


function Radio(station){
  var _listeners = {};

 EventEmitter.call(this);

 var self = this;

 setTimeout(()=>{
   emit('play',station);
   //station作为参数传入，当监听到play这个事件，会传入回调函数
 },0);

 setTimeout(()=>{
   emit('stop',station)
 },5000);

 function emit(evt,arg){
   if(typeof(_listeners[evt]) === 'undefined'){
     console.log('Error');
     process.exit(1)
   }

   _listeners[evt].forEach(fn) =>{
     fn.call(this,arg);
   }
 }
 this.on = (evt,fn) =>{
   if(typeof _listeners[evt] === 'undefined'){
     _listeners[evt] = [];
   }

   _listeners[evt].push(fn);
 }
}


module.exports = Radio;
