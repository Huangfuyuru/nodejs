#!/usr/bin/node

const cp = require('child_process');

var child = cp.spawn('./02-child.js',[]);

//第一个是可读流，第二个是可写流
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
