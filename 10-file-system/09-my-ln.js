#!/usr/bin/node

const fs = require('fs');

switch(process.argv.length){
  case 4://hard link
     var  src = process.argv[2],
          dst = process.argv[3];
     fs.linkSync(src,dst);
    break;
  case 5://soft link
     var s = process.argv[2],
         src = process.argv[3],
         link = process.argv[4];
     if(s !== '-s') errMsg();
     fs.symlinkSync(src,lnk)
    break;
  default://error
    errMsg();
}

function errMsg(){
  console.log('命令行语法不正确');
  exit(1);  
}
