#!/usr/bin/node
var fs = require('fs');
var list = [];
fs.readFile('./js/data.js',(err,data)=>{
  if(err){
    console.log('没读到')
    process.exit(1)
  }else{
    list = JSON.parse(data.toString('utf8')); 
    console.log(list.toString('utf8'));

  }
});
var obj = {name:'TOM',age:20,sex:'男'};
list.push(obj);
console.log(list)
/*
fs.writeFile('./js/data.js',list,err=>{
  if(err){
    console.log("出错了");
    process.exit(1);
  }
})
*/
