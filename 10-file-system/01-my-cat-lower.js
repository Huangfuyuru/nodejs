#!/usr/bin/node
//用底层API打开文件，在同步读取文件内容
//因为是同步，所以err要用try-catch捕获
const file = process.argv[2] || __filename,
      fs = require('fs');

try{
var len = fs.statSync(file).size，//文件尺寸
    buf = new Buffer(len),
    fid =fs.openSync(file,'r');//文件id
//readSync被废弃
fs.readSync(fid,buf,0,len,0);

console.log(buf.toString('utf8'));

fs.closeSync(fid);
}
catch(e){
  console.error(e.message);
  process.exit(1);
}
