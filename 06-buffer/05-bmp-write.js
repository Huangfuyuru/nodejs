#!/usr/bin/node
//写入位图文件
//1.先写入位图的头信息
//2.写入每个像素点的信息
//使用write方法

var fs = require('fs');

//设置位图的宽高
var width = 16;
var height = 16;

//位图的数据=像素*每一个像素占四个字节
var pixIByteSize = width * height * 4;

//位图的大小=位图数据+头信息数据54
var totalSize = pixIByteSize + 54;

var buf = new Buffer(totalSize);

buf.fill(0);//给每个字节清零

//head
buf.write('BM');
buf.writeUInt32LE(totalSize,0x02);
buf.writeUInt32LE(54,0x0a);
buf.writeUInt32LE(40,0x0e);
buf.writeUInt16LE(1,0x1a);
buf.writeUInt32LE(32,0x1c);
buf.writeUInt32LE(pixIByteSize,0x22);
buf.writeInt32LE(width,0x12);
buf.writeInt32LE(height,0x16);

//data
for(var i = 54,i<totalSize;i+=4){
  buf.writeUInt32LE(0xff0000ff,i);
}
fs.writeFile('./out.bmp',buf,function(err){

})
