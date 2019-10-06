#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2];


fs.mkdir(dir,err=>{
  if(err) throw err;
})
