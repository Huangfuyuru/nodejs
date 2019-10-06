#!/usr/bin/node

const cp = require('child_process');
var file = '';
for(var i=2;i<process.argv.length;i++){
  file += process.argv[i] + ' '
}

//exec没有参数,直接写在一起
cp.exec(file,function(err,out,error){
  if(err){
    console.error(error);
    process.exit(1)
  }
  console.log(out);
})

