#!/usr/bin/node
//process.argv属性返回一个数组，其中包含当启动Node.js进程时传入的命令行参数
//第一个元素是process.execPath 第二个元素是正在执行的JS文件的路径
//其余参数是任何其他命令行的参数
//argv[2]是实际的命令所在位置
//console.log(process.argv.length);
//console.log(process.argv);
var argv = process.argv;


var expression  = process.argv[2];

console.log(expression+'='+'%d',eval(expression));

