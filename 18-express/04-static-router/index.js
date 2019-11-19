const express = require('express'),
      app = express();

function r1(req,res,next){
    console.log('r1');
    next()
}
function r2(req,res,next){
    console.log('r2');
    next()
}
app.get('/',[r1,r2],(req,res,next)=>{
    console.log('r3');
    next()
},(req,res,next)=>{
    console.log('r4');
    res.end('OK')
})


app.get('/json',(req,res,next)=>{
    res.json({"username":"hf","password":"123"});//直接解析json数据并end
})
app.get('/download',(req,res,next)=>{
    res.download('./package-lock.json')
})
app.get('/course/:id',(req,res,next)=>{
    console.log(req.params.id);
    res.end('id')
})
app.listen(8080)