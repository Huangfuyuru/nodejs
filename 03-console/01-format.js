#!/usr/bin/node
const user = {
  name:'王顶',
  age:41,
  qq:'408542507'
};
const log = console.log;

//三种占位符
//%s字符串类型
//%整数类型
//%j对象类型
log('name: %s,age: %d',user.name,user.age);
log('JSON: %j',user);
//输出方式
log('qq:%s',user.qq);//占位符输出
log('qq:',user.qq);//逗号间隔，多变量输出
log('qq:'+user.qq);//拼接字符串输出
log(`qq:${user.qq}`);//模板字符串输出

