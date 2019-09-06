#!/usr/bin/node
console.log('dir name:',__dirname);
console.log('file name:',__filename);

var file=__dirname+'/data/db.xml';
console.log('file name:',file);
//linux和windows对于文件的路径不同，可以用下面的方法，这样不论
//在linux和window中都可以解析路径
//引入path模块
const path=require('path');
//path.join([路径1],[路径2],[路径3]);把他们连接起来
file =path.join(__dirname,'data','db.xml');
console.log('dir name:',file);
console.log('同时使用');
console.log('nice');
