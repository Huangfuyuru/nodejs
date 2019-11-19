// #!/usr/bin/node
// const http = require('http'),
//       log = console.log;

// http.createServer((req,res)=>{
//   //对客户端发过来的请求进行打印
//   log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
//   log(req.headers);
//   log('');

//   req.pipe(process.stdout);

//   res.end('hello client');
// }).listen(8080);


var http = require('http');
http.createServer((req,res)=>{
  console.log(`${req.method} ${req.url} ${req.httpVersion}`);
  console.log(req.headers);
  console.log('');
  req.pipe(process.stdout);
  res.end('hello')
}).listen(8080)