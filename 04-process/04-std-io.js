#!/usr/bin/node
var  msg = ['Name','Email','QQ','Mobile'];
var me = {},i = 1  ;//设一个空对象，等后面插入
console.log(msg[0] +':');

process.stdin.on('data', function(data) {
  var cmd = "me."+ msg[i-1] + "='" +data.slice(0,data.length-1) + "'";
  //eval(..) 会将传入的字符串当JS代码进行执行
  //上面的cmd 其实是  me.Name = " ..."  然后执行就是在me这个对象中填入了一个属性
  //var cmd = 'me.' + msg[i-1] + '=' + '""' +data.slice(0,data.length-1) + '"" ;
  eval(cmd);
  if(i === 4){
    console.log(me);
    process.exit(0);
  }else{
    console.log(msg[i++]+":")
  }
});
process.stdin.on('end', function() {
  console.log(me);
})
