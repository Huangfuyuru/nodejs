#!/usr/bin/node
/*
 * 对应函数工厂
var Circle = require('./02-export-object.js');

var c = new Circle(10);

console.log('diameter:',c.diameter());
console.log('circumference:',c.circumference());
console.log('area:',c.area());
*/
var circle = require('./02-export-object.js');

console.log(circle.area(10));
console.log(circle.circumference(10));
console.log(circle.diameter(10));

