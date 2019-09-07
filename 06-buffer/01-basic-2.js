#!/usr/bin/node
//当给字符串指定类型utf-8后，用.toString()可以打印出该字符串
var buf = new Buffer('你好','utf-8');

console.log(buf.toString());
