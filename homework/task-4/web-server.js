const http = require('http'),
      fs = require('fs'),
      qs = require('querystring');


var data = '';
var count = 0;
http.createServer((req,res)=>{
    switch (req.method) {
        case 'GET':
            console.log(req.method);
            getMsg(req,res);
            break;
        case 'POST':
            console.log(req.method);
            postMsg(req,res)
            break;
    }
}).listen(8081)

function getMsg(req,res){
    if(req.url === '/login'){
        show(res)
    }else{
        res.stateCode = 404;
        res.end();
    }
}

function postMsg(req,res){
    if(req.url === '/login'){
        var newPair = 0;
        req.on('data',(chunk)=>{
            console.log('chunk',chunk);
            data += chunk;
        });
        req.on('end',()=>{
            var account = qs.parse(data);
            console.log('user:passwd',account);
            if(account.username === 'zhangsan' && account.pwd === '123'){
                console.log(req.headers.cookie);
                
                if(typeof req.headers.cookie === 'undefined'){
                    res.writeHead(200,{
                        'Set-cookie':`count=0;max-age=6000`
                    });
                    res.end(`load ${newPair} times`)
                }else{
                    var pair = req.headers.cookie.split('=');
                    newPair = Number(pair[1])+1;
                    res.writeHead(200,{
                        'Set-cookie':`count=${newPair};max-age=6000`
                    });
                    res.end(`load ${newPair} times`)
                }
                
            }else{
                res.stateCode = 404;
                res.end('username or password is wrong,please try again');
            }
        })

    }else{
        res.stateCode = 404;
        res.end();
    }
}

function show(res){
    var data = fs.readFileSync('./index.html','utf8');
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    res.end(data)
}