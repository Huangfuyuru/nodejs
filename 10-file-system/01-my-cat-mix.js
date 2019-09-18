#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

//打开，关闭是底层API
const fid = fs.openSync(file,'r');
//原来传的是file路径，这次传的是id,
//同步读取文件的全部内容

console.log(fs.readFileSync(fid).toString('utf8'));
fs.closeSync(fid);

