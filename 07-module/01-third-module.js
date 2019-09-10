#!/usr/bin/node

//模块化之非全局模块
//需要先使用npm install 模块名 来安装
//var now = require('date-now');//date对象的now方法封装成了一个模块

//console.log(now());

//console.log(Date.now());


const chalk = require('chalk'),
      log = console.log;

log(chalk.red('this is red'));
log('this is blue',chalk.blue('this is blue'));
log('this is green',chalk.green('green'));
