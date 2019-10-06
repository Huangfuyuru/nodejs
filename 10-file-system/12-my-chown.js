#!/usr/bin/node

const fs = require('fs'),
      uid = process.argv[2].
      gid = process.argv[3],
      file = process.argv[4];
try{
  fs.chownSync(file,uid,gid);
}catch(e){
  console.error('错了');
  process.exit(1)
}
