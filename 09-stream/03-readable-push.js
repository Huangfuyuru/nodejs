#!/usr/bin/node

const read = require('stream').Readable;

var r = new read();
r.push("he\n");
r.push('yes\n');
//压进去
r.push(null);
//在连接到了输出流中
r.pipe(process.stdout);
