#!/usr/bin/node
//process.argv属性返回一个数组，其中包含当启动Node.js进程时传入的命令行参数
//第一个元素是process.execPath 第二个元素是正在执行的JS文件的路径
//其余参数是任何其他命令行的参数
//argv[2]是实际的命令所在位置
//console.log(process.argv.length);
//console.log(process.argv);

const log = console.log,
      arg = process.argv[2];

if(typeof(arg) === 'undefined' || arg === '--help' || arg === '-h'){
  help();
}else{
  calc();
}

function help(){
  const msg = '' 
        + 'usage: cmd-name [OPTION] [expression]\n'
            + 'evaluate the expression.\n'
                + '\n'
                    + 'Mandatory arguments to long options are mandatory for short options too.\n'
                        + '  -h, --help output help information and exit\n';

    log(msg);
}

function calc(){
  log(arg + '=%s',eval(arg))
}
