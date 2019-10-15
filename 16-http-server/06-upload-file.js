#!/usr/bin/node
const http = require('http'),
      log = console.log,
      fs = require('fs'),
      qs = require('querystring');

http.createServer((req, res) =>{
  log('${re1.method} ${req.url} HTTP/${req.httpVersion}');
  log(req.headers);
  log();
  var f1 = '';
  
  req.setEncoding('binary');//设置编码格式
  req.on('data',(data)=>{
    f1 += data
  })
  req.on('end',()=>{
  //get file name
  
  var filename1 = qs.parse(f1.split('\r\n')[1].split(';')[2].trim()).filename;
  filename1 = filename1.slice(1,filename1.length-1);

  //get file data
  var filedata1 = f1.split('\r\n')[4];
  log(new Buffer(f1.split('\r\n')[4]).toString('utf8'))
  })

  //step2:save file
  fs.writeSync(filename1,filedata1,{'enconding':'binary'})
  req.pipe(process.stdout);
  res.end('OK!')
}).listen(8080)
