#!/usr/bin/node
const msg = ['Name','Email','QQ','Mobile'];
var me = {},i = 1  ;//设一个空对象，等后面插入
console.log(msg[0] +':');
process.stdin.on('data',function(data) {
  var cmd = 'me.' + msg[i-1] + '=' + data.slice(0,data.length-1) + "";
  eval(cmd);
  console.log(msg[i++]+':');
});
process.stdin.on('end',function(){
  console.log(me);
})

