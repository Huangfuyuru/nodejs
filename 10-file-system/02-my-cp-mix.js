#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2] || __filename,
      dst = process.argv[3];

//fs.createReadStream(src).pipe(fs.createWriteStream(dst));

//先通过底层api打开
const fid = fs.openSync(src,'r');
const fid2 = fs.openSync(dst,'w');

//然后同步读取

var s = fs.readFileSync(fid).toString('utf8');
fs.writeFileSync(fid2,s);

fs.closeSync(fid);
fs.closeSync(fid2);

