#!/usr/bin/node
//同步
const fs = require('fs'),
      file = process.argv[2] || __filename;
//existsSync(file)判断file是否存在
if(fs.existsSync(file)){
console.log(fs.readFileSync(file).toString('utf8'));
}else{
  console.error('不存在');
  process.exit(1)
}

