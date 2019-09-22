#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2];

console.log(src,'->',fs.readlinkSync(src));

