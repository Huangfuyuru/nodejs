#!/usr/bin/node

const GreenStream = require('./04-green-stream');

const stdin = process.stdin;

var g = new GreenStream();

stdin.resume();

stdin.pipe(g);
