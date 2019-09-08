#!/usr/bin/node

//暴露一个变量,module代表当前的脚本文件
//exports方法暴露模块的公开接口（可以暴露出变量、对象、函数）
//让02-main.js来使用这个模块
module.exports = Math.PI;
console.log('\n02-export-var:\n',module);
