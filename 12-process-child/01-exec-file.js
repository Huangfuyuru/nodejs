#!/usr/bin/node

const cp = require('child_process'),
      method = process.argv[2] || 'cat';
var file = [];
for(var i=3;i<process.argv.length;i++){
  file.push(process.argv[i])
}
cp.execFile(method,file,function(err,out,error){
  if(err){
    console.error(error);
    process.exit(1)
  }
  console.log(out);
})

