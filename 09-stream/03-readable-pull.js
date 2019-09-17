#!/usr/bin/node

const Read = require('stream').Readable;

var r = new Read();

var c = 'a'.charCodeAt(0);

r._read = ()=>{
  r.push(String.fromCharCode(c++));
  if(c > 'z'.charCodeAt(0)) r.push(null);
};
//只有在拉取的时候才会输出，需要在看
r.pipe(process.stdout);
