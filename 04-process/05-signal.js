#!/usr/bin/node
//处理信号量
//一个进程响应另一个进程发出的信号

console.log('process.id',process.pid);
//不让进程退出
process.stdin.resume();//等待输入，所以不会退出

//on 函数，事件响应函数
process.on('SIGINT',function(){
  console.log('you press ctrl c,good bye');
  process.exit(0);
});

process.on('SIGSTP',function(){
  console.log('you press ctrl z,stop running');
})

