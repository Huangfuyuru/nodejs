#!/usr/bin/node
//导出对象
/*
var pi = Math.PI;
//函数工厂形式
var Circle =function(radius){
  this.diameter = function(){
    return 2 *radius;
  }
  this.circumference = function(){
    return pi * 2 * radius
  }
  this.area = function(){
    return pi * radius *radius;
  }
}

module.exports = Circle;
*/
//定义一个对象,以键值对存储
var circle = {
  'area':function(radius){
    return Math.PI*radius*radius;
  },
  'circumference':function(radius){
    return 2*Math.PI*radius;
  },
  'diameter':function(radius){
    return 2*radius;
  }
};
module.exports = circle;





