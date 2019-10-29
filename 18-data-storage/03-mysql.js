#!/usr/bin/node

const mysql = require('mysql'),
      con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'ddd',
        database:'test'
      });
con.connect();

//增
/*
con.query('insert into books(book_id,title,status) values(?,?,?)',['104','Nodejs实干','4'],(err,result)=>{
  if(err){
    console.log(err.message);
    process.exit(1)
  }
  process.exit(0)
})
*/
//删
/*
con.query('delete from books where book_id = ?',[104],(err,result)=>{
  if(err){
    console.log(err.message);
    process.exit(1);
  }
  process.exit(0)
})
*/
//改
con.query('update books set title = ? where book_id = ?',['xiaowang',102],(err,result)=>{
  if(err){
    console.log(err.message);
    process.exit(1)
  }
  process.exit(0)
})
//查
con.query('select * from books',(err,result)=>{
  if(err){
    console.log(err.message);
    process.exit(1)
  }
  console.log(result);
  process.exit();
})
