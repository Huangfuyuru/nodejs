#!/usr/bin/node
console.log('dir name:',__dirname);
console.log('file name:',__filename);

var file=__dirname+'/data/db.xml';
console.log('file name:',file);

const path=require('path');
file =path.join(__dirname,'data','db.xml');
console.log('dir name:',file);
