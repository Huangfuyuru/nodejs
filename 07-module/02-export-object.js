#!/usr/bin/node
//导出对象

var pi = Math.PI;
var Circle =function(radius){
  /**
   *计算圆的面积
   *@param radius {number} 圆的半径
   *@returns {number} 圆的半径
   * */
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
