#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

try{
  console.log(fs.statSync(file));
}catch(err){
  console.error(err.message);
  process.exit(1);
}
