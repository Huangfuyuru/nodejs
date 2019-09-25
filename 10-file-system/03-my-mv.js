#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2] || __filename,
      dst = process.argv[3];

if(fs.existsSync(src)){
  fs.renameSync(src,dst);
}else{
  console.error('不存在');
  process.exit(1);
}

