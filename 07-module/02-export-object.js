#!/usr/bin/node
//导出对象

var pi = Math.PI;
var Circle =function(radius){
  this.diameter = function(){
    return 2 *　radius;
  }
  this.circumference = function(){
    return pi * 2 * radius
  }
  this.area = function(){
    return pi * radius *radius;
  }
}

module.exports = Circle;
