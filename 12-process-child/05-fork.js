#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process. PID:',process.pid);

cp.fork('./02-child.js');

setTimeout(()=>{
  console.log('3 seconds passed.father Game Over')
},3000)
