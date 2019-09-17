#!/usr/bin/node
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('hello',function(){
  console.log('hellooooooooo')
});

emitter.on('bye',function(){
  console.log('byeeeeeeeee')
})

setTimeout(function(){
  emitter.emit('hello')
},500);

setTimeout(function(){
  emitter.emit('bye')
},1000)
