#!/usr/bin/node

const cp = require('child_process');


var cat = cp.spawn('cat',['data.txt']),
    sort = cp.spawn('sort'),
    uniq = cp.spawn('uniq');
//第一个是可读流，第二个是可写流
cat.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin);
uniq.stdout.pipe(process.stdout);

