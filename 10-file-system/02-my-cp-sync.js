#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2] || __filename,
      dst = process.argv[3];

//fs.createReadStream(src).pipe(fs.createWriteStream(dst));

if(fs.existsSync(src) && fs.existsSync(dst)){
  var s = fs.readFileSync(src).toString('utf8');
  fs.writeFileSync(dst,s);
}else{
  console.error('文件不存在');
  process.exit(1);
}
