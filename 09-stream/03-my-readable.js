#!/usr/bin/node

const Read = require('stream').Readable;

function MyReadable() {
  Read.call(this)
}
