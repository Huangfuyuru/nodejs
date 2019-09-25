#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2];

try{
  fs.mkdirSync(dir)
}catch(e){
  console.log('无参数');
  process.exit(2)
}
