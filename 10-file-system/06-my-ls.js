#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2] || __dirname;
//返回的是一个数组
console.log(fs.readdirSync(dir));
//来判断是目录还是文件
//
//
//fs.statSync(dir+content);
//
//在用   判断
//isFile
//isDirectory
