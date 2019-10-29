#!/usr/bin/node
const http = require('http'),
      log = console.log,
      qs = require('querystring'),
      url = require('url');
const mysql = require('mysql'),
      con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'ddd',
        database:'test'
      });
con.connect();
var items = select();//用来接收
log(items);
http.createServer((req, res) =>{
  req.url = url.parse(req.url).pathname;

  //当是 GET 方法时，只显示页面
  if(req.method=== 'GET' && req.url === '/'){
    res.writeHead(200,{
      'Content-Type':'text/html'
    });
    
    show(res);

    //POST 方法时，可以提交数据
  }else if(req.method === 'POST' && req.url === '/'){
    //提交数据
    var it = '';
    //这里得到的data 是请求体中的数据
    req.on('data',(data)=>{
      it += data
    })
    req.on('end',()=>{
      if(typeof it !== 'undefined'){
        log(it);
        items.push(qs.parse(it).item)
      }
      show(res)
    })
  }else{
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain');
    res.end('Resource not found!')
  }
}).listen(8080)


//join把数组中的所有元素放入一个字符串，通过指定的分隔符进行分割
function show(res){
  var html = '<!DOCTYPE html>\n'
              +'<html>\n'
              +'  <head>\n'
              +'    <meta charset="UTF-8">\n'
              +'    <title>Todo list</title>\n'
              +'  <head>\n'
              +'  <body>\n'
              +'    <h1>Todo List</h1>\n'
              +'    <ul>\n'
              + items.map(function(item){return '<li>'+item+'</li>'}).join('\n')
              +'    </ul>\n'
              +'    <form method="POST" action="/" />\n'
              +'    <input type="text" name="item"/>\n'
              +'    <input type="submit" value="Add Item"/>\n'
              +'    </form>\n'
              +'  </body>\n'
              +'</html>\n';
  res.end(html);

}


function select(){
con.query('select * from todo',(err,result)=>{
  if(err){
    console.log(err.message);
    process.exit(1)
  }
  items = result;
})
}

function insert(){
con.query('insert into todo(item) values(?)',[item],(err,result)=>{
  if(err){
    console.log(err.message);
    process.exit(1)
  }
  return 0;
})
}
