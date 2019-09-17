#!/usr/bin/node

const Radio = require('./05-radio');

const station = {
  freq:'106.7',
  name:'music Radio'
};

var radio = new Radio(station);

radio.on('play',(station1)=>{
  console.log('%s FM %s opened',station1.freq,station1.name)
});

radio.on('stop',(station1)=>{
  console.log('%s FM %s closed',station1.freq,station1.name)
})
