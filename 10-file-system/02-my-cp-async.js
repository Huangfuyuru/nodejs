#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2] || __filename,
      dst = process.argv[3];

//fs.createReadStream(src).pipe(fs.createWriteStream(dst));

fs.readFile(src,(err,data)=>{
  if(err){
    console.log(err.message);
    process.exit(1)
  }else{
    fs.writeFile(dst,data,err=>{
      if(err){
        console.log(dst文件不存在);
        process.exit(2)
      }
    })
  }
})
