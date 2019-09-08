#!/usr/bin/node
//buffer解码
var msg = process.argv[2];
//指定msg的编码格式是base64或者是hex,要与msg本身的格式一致
var buf = new Buffer(msg,'hex');
//toString('utf8')解析成字符串
var parts = buf.toString('utf8').split(':');
console.log('name:%s,passwd:%s',parts[0],parts[1]);
