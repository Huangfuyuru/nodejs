#!/usr/bin/node
//buffer解码
var msg = process.argv[2];
var buf = new Buffer(msg,'base64');
var parts = buf.toString('utf8').split(':');
console.log('name:%s,passwd:%s',parts[0],parts[1]);
