#!/usr/bin/node
//Buffer编码
const log = console.log;
const usr = process.argv[2];
const pwd = process.argv[3];
log('usr: %s,pwd: %s',usr,pwd);

//将字符串转换成base64编码,hex编码
var str = usr + ':' + pwd;
var buf =new Buffer(str);
log('base64:%s',buf.toString('base64'));
log('hex:%s',buf.toString('hex'));

