#!/usr/bin/node

const fs = require('fs'),
      mod = process.argv[2],
      dst = process.argv[3];

try{
  fs.chmodSync(dst,parseInt(mod,8))
}catch(e){
  console.log(e.message);
  process.exit(1);
}
