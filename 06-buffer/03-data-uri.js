#!/usr/bin/node

//看视频!!!!
const fs = requrie('fs'),
      log = console.log;
var data = fs.readFile('./qr-code.jpg').toString('base64');
log(data);

http.create
