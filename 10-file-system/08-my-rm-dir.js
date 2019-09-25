#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2];

try{
    fs.rmdirSync(dir);
    
}catch(e){
  console.log('目录不存在');
  process.exit(2);
}
