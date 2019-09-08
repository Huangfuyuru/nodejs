#!/usr/bin/node

//Buffer实现Data URI
var fs = require('fs');//引入系统文件
var http = require('http');
var mine = 'image/png';//图片格式
var name = process.argv[2];//通过参数获得图片名

var data = fs.readFileSync('./book.png').toString('base64');//同步读取图片，还有异步读取
//没加toString('base64')的时候读取出来的是一个buffer,然后加toString('base64'),可以以'base64'这种格式读取，二进制转换base64

//然后以固定格式连接起来
var uri = 'data:' + mine + ';base64,' + data;//这里很重要

console.log('img-name',name);
console.log('uri',uri);
//网页监听
//直接嵌入省贷宽，网页优化
var html = '<!DOCTYPE html><html><body><img alt="book.png" src="' + uri + '"></body></html>';
//写成一个服务器
http.createServer(function(req,res){
  console.log(req.headers);
  res.end(html);
}).listen(8080);
