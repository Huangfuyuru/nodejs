#!/usr/bin/node
//读取位图信息
//要知道
//1.偏移量(十六进制或十进制存储)
//2.占存储空间大小
//3.含义

const fs = require('fs'),
      log = console.log;
//用一个回调函数来接收
fs.readFile('./nodejs-logo.bmp',function(err,buf){
  if(err){
    //如何错误，写一个错误退出码
    console.error(err);
    process.exit(1);
  }
  //将Buf转换成ascii码，并且提取前两位，如果是BM(在window系统下)说明读取正确
  if(buf.toString('ascii',0,2) === 'BM'){
    log('width',buf.readInt32LE(0x12));//0x12是偏移量(开始位置),Int32说明是他的存储空间
    log('height',buf.readInt32LE(0x16));
    log('deepth',buf.readUInt16LE(0x1C));
    log('imagesize',buf.readInt32LE(0x22));
  }
})
