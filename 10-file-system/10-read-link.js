#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2];
try{
console.log(src,'->',fs.readlinkSync(src));
}catch(e){
  console.error('不存在');
  process.exit(1);
}
