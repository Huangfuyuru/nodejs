#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2] || __filename,
      dst = process.argv[3];

//fs.createReadStream(src).pipe(fs.createWriteStream(dst));
try{
  var len = fs.statSync(src).size,
      buf = new Buffer(len),
      //打开文件
      fid = fs.openSync(src,'r');
  var fid2 = fs.openSync(dst,'w'),
      buf2 = new Buffer(len);
//用readSync 把src中的内容读到buf里
  fs.readSync(fid,buf,0,len,0);
//把buf里的内容转换成 utf8格式
  var s = buf.toString('utf8');
//在通过writeSync写入
  fs.writeSync(fid2,s,0,'utf8');
 // fs.writeFileSync(dst,s);
//要记得关闭文件
  fs.closeSync(fid);
  fs.closeSync(fid2);
}catch(e){
  console.log(e.message);
  process.exit(1);
}
