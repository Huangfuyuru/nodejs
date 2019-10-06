#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2];

if(dir){
  fs.mkdirSync(dir)
}else{
  console.log('输入错误');
  process.exit(1)
}
