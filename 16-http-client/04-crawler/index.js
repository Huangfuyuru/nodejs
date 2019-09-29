#!/usr/bin/node

//cheerio 为服务器定制的，快速、灵活的jQuery核心实现
const http = require('https'),
      cheerio = require('cheerio'),
      log = console.log,
      addr = 'https://segmentfault.com/lives/free';

http.get(addr,function(res){
  var result = '';
  
  res.on('data',function(data){
    result += data;
  });

  res.on('end',function(){
    //cheerio.load(html代码)
    //result 是返回的 html代码
    //我们用 $保存了 result
    var $ = cheerio.load(result);
    //.find(selector) 获得一个在匹配的元素中由选择器过滤过的后代
    //从body中找到 类 card-body 中的内容
    //找到的 card-body 不止一个
    //.each() 迭代一个cheerio对象，为每个匹配元素执行一个函数
    $('body').find('.card-body').each(function(){
      var cName = $(this).find('.card-title>a').text(),
          cURL = $(this).find('.card-title>a').attr('href');
    cURL = 'https://segmentfault.com'+cURL;
    if(cName == '') return;
       log('课程名称',cName);
       //trim()移除字符串两侧的空白字符或其他预定义字符
       log('课程地址',cURL.trim());
       log('')
    });
  })
})
