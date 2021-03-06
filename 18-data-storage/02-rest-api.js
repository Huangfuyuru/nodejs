#!/usr/bin/node
const http = require('http'),
      log = console.log,
      fs = require('fs');
var items = loadData();

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
  var data = JSON.stringify(items);//将对象或数组 转换为一个 JSON字符串
  res.setHeader('Content-Length',Buffer.byteLength(data));
  res.setHeader('Content-Type','text/plain;charset="utf-8"');
  res.setHeader('Access-Control-Allow-Origin','*');
  //log(data);
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
  res.end(req.method);
}

function remove(req,res){
  var id = req.url.slice(1,req.url.length);
  items = items.splice(id,1);
  res.end('remove OK');
}

function loadData(){
  try{
    var data = fs.readFileSync('./todo-list.txt','utf8');
    return JSON.parse(data);
  }catch(e){
    return [];
  }
}

process.on('SIGINT',()=>{
  fs.writeFileSync('./todolist.txt',JSON.stringify(items));
  process.exit();
})
