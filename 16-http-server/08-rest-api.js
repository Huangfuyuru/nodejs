#!/usr/bin/node
const http = require('http'),
      log = console.log;
var items = [];

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  switch(req.method){
  case 'GET':
    select(req,res);
    break;
  case 'POST':
    create(req,res);
    break;
  case 'PUT':
    update(req,res)
    break;
  case 'DELETE':
    remove(req,res);
    break;
  default:
    break;
  }
  res.end('server OK!')
}).listen(8080);

function select(req,res){
  var data = JSON.stringify(items);
  res.setHeader('Content-Length',Buffer.byteLength(data));
  res.setHeader('Content-Type','text/plain;charset="utf-8"');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.end(data);
}

function create(req,res){
  var item = '';
  req.on('data',(data)=>{
    item += data;
  });
  req.on('end',()=>{
    if(typeof(item) !== 'undefined'){
      items.push(item);
      res.end('create OK')
    }else{
      res.end('create ERR')
    }
  })
}

function update(req,res){
  //删除的放在查询字符串中，改变的放在请求体中
  //验证id
  //parse url get id
  //parse req get content
  //modify items.items[id] = new content
  res.end(req.method);
}

function remove(req,res){
  var id = req.url.slice(1,req.url.length);
  //验证id 1.type 2.range范围 
  //删除相对应id的数组items元素
  items = items.splice(id,1);
  res.end('remove OK');
}
