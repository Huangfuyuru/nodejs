#!/usr/bin/node

const fs = require('fs');

switch(process.argv.length){
  case 4://hard link
     var  src = process.argv[2],
          dst = process.argv[3];
     fs.linkSync(src,dst);
    break;
  case 5://soft link
     var  src = process.argv[2],
          dst = process.argv[3],
          lnk = process.argv[4];
     if(src !== '-s') errMsg();
     fs.symlinkSync(dst,lnk)
    break;
  default://error
    errMsg();
}

function errMsg(){
  console.log('命令行语法不正确');
  exit(1);  
}
