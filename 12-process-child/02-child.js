#!/usr/bin/node

//体验spawn的优势，流：省内存


console.log('I am child process. PID:',process.pid);

global.setInterval(function(){
  console.log('Time is %d',Date.now())
},2000);

global.setTimeout(function(){
  console.log('child_process bye');
  process.exit();
},8000)









