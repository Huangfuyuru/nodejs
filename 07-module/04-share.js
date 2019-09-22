#!/usr/bin/node

var count = 0;
function Num(){

};

Num.prototype.add = ()=>{
  count++
}

Num.prototype.getCount = ()=>{
  return count
} 

module.exports = Num;
