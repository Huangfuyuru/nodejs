#!/usr/bin/node

const cp = require('child_process');

cp.execFile('./02-child.js', [], function(err,out){
  console.log(out);
  if(err) {
    console.log(err.message);
  }
});

