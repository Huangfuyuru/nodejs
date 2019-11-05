const express = require('express'),
      app = express();
//基本路由 绑定在app上


function r3(req,res,next){
  console.log('r3');
  next();
}
function r4(req,res,next){
  console.log('r4');
  next()
}
app.get('/',[r3,r4],function(req,res,next){
  console.log('r1');
  next()
},function(req,res,next){
  console.log('r2');
  res.end('OK')
});



app.get('/json',function(req,res,next){
  res.json({"username":"hf","password":'123'});
});
app.get('/download',function(req,res,next){
  res.download('./package.json')
});
app.get('/course/:id',function(req,res,next){
  console.log(req.params.id);
  res.end('id')
});
app.get('/posts/:year/:month',function(req,res,next){
  console.log(req.params.year);
  console.log(req.params.month);
  res.end('year/month')
});
app.listen('8080');
