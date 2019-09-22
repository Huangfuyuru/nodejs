#!/usr/bin/node
//Buffer编码
const log = console.log;
const usr = process.argv[2];
const pwd = process.argv[3];
if(usr === undefined || pwd === undefined){
  console.log('信息错误');
  process.exit(1);
}
log('usr: %s,pwd: %s',usr,pwd);

var str = usr + ':' + pwd;
//先将用户名和密码用":"连接起来
//用拼接好的字符串实例化对象
var buf =new Buffer(str);
log('uesr name and passwd',buf.toString());
log('base64:%s',buf.toString('base64'));
//将字符串转换成base64编码,hex编码
log('hex:%s',buf.toString('hex'));

