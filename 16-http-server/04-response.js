// #!/usr/bin/node
// const http = require('http'),
//       log = console.log;

// http.createServer((req, res) =>{
//   var html = '<!DOCTYPE html>\n'
//               +'<html>\n'
//               +'  <head>\n'
//               +'    <meta charset="UTF-8">\n'
//               +'    <title>Hello</title>\n'
//               +'  <head>\n'
//               +'  <body>\n'
//               +'    <h1>Hello world!</h1>\n'
//               +'  </body>\n'
//               +'</html>\n';
//   if(req.url === '/'){
//     res.writeHead(200,{  //可以用res.writeHead(状态码，一些)
//       'Content-Type':'text/html',
//       'Content-Length':Buffer.byteLength(html)
//     });
//     res.end(html);
//     log(req.headers);
//   }else{
//     res.statusCode = 404;
//     res.setHeader('Content-Type','text/plain');
//     res.end('Resource not found!')
//   }
// }).listen(8080)


const http = require('http'),log=console.log;
http.createServer((req,res)=>{
  var html = '<!DOCTYPE html>\n'+
             '<html>\n'+
             '<head>\n'+
             '<meta charset="UTF-8"/>\n'+
             '<title>hello</title>\n'+
             '</head>\n'+
             '<body>你好</body>\n'+
             '</html>\n';
  if(req.url == '/'){
    res.writeHead(200,{
      'Content-Type':'text/html',
      'Content-Length':Buffer.byteLength(html)
    })
    res.end(html)
  }else{
    res.statusCode = 404;
    res.end('No')
  }
}).listen(8080)