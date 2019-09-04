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

log('qq: %s',user.qq);//占位符输出

