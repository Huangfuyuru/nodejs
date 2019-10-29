#!/usr/bin/node
//回调异步 处理err对象
const fs = require('fs'),
      file = process.argv[2] || __filename;

//data是读到的文件内容
/*
fs.readFile(file,function(err,data){
  if(err){
    console.log(err.message);
    process.exit(1)
  }else{
    console.log(data.toString('utf8'))
  }
  console.log(data.toString('utf8'))
})
*/
new Promise((resolve,reject)=>{
  fs.readFile(file,(err,data)=>{
    if(err){
      reject(err)
    }
    resolve(data)
  })
}).then(data=>{
  console.log(data.toString('utf8'))
}).catch((err)=>{
  console.log(err)
})
