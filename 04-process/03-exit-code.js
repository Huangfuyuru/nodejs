#!/usr/bin/node
//我们通过命令行传入了一个参数，process.argv[2]就是这个参数
console.log('exit code:',process.argv[2]);
//然后把他作为退出码process.exit();
process.exit(process.argv[2]);
//然后用echo $?来验证
