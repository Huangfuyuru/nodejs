#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      msg = process.argv[2],
      addr = 'http://localhost:8080';

var option = url.parse(addr);
option.method = 'POST';
var req = http.request(option,(res)=>{

});
req.end(msg);
