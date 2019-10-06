#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

try{
  fs.unlinkSync(file);
}catch(e){
  console.log(e.message);
  process.exit(1)
}


