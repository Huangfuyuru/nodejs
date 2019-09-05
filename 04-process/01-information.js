#!/usr/bin/node

const log=console.log;
//process (进程)
//process对象是一个全局变量，他提供有关当前Node.js进程的信息并对其进行控制。
//作为一个全局变量，他始终可供Node.js应用程序使用，无需使用require()
log('CPU',process.arch);//打印CPU架构信息
log('OS',process.platform);//打印操作系统版本信息
log('PID',process.pid);//打印进程id信息
log('execPath',process.execPath);//打印Node.js可执行文件的绝对路径信息

/*process.stdin.on('data',function(data){
  log(data);
});//在脚本中添加标准输入流的读取操作，让程序暂停执行
*/
log('node.js ver',process.version);//打印Node.js版本信息
log('uid',process.pid);//打印当前登录用户的id信息
log('gid',process.getgid());//打印当前登录用户组id信息
log('cwd',process.cwd());

log('');
log('rss',process.memoryUsage().rss);
log('heapTotal',process.memoryUsage().heapUsed );
