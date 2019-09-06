#!/usr/bin/node
//括号里可以是字节数、数组、在看一下
var buf1  = new Buffer(256);
buf1[0]=0x11;
console.log('buf1.length:',buf1.length);
console.log('buf1',buf1);
//切片
var buf2 = buf1.slice(250,256);
console.log('buf2',buf2);

for(var i=0;i<buf1.length;i++){
  buf1[i] = i;
}
console.log(buf1);

//将所有的值设为相同的值
buf1.fill(0,0,256);//看一下这个API
console.log(buf1);

console.log(buf1.toJSON);

console.log(JSON.stringify(buf2));

//数组实例化Buffer
var arr = ['a',0xba,0xdf,0x00,255,00];
var buf3 = new Buffer(arr);
console.log('buf3',buf3);
console.log('buf3.length',buf3.length);

//字符串实例化Buffer
var buf4 = new Buffer('Hello World!');
console.log('buf4',buf4);
console.log('buf4.length',buf4.length);

//把buf4拷贝到buf6中
var buf6 = new Buffer(buf3.length);
buf4.copy(buf6,0,0,buf3.length);
console.log(buf4);
console.log(buf6);

var str = '你好 world';
var buf5 = new Buffer(str);
console.log('buf5.length',buf5.length);//字节数的长度
console.log('str.length',str.length);//字符串长度


