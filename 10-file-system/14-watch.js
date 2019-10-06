#!/usr/bin/node

const fs = require('fs');

var w = fs.watch(__dirname,console.log);

process.on('SIGINT',()=>{
  w.close();

  console.log('要结束了');

  setTimeout(()=>{
    process.exit(1);
  },5000)
})


