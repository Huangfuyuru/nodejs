const express = require('express'),
      app = express();
//使用中间件，静态
app.use(express.static('.'));

app.listen('8080');
