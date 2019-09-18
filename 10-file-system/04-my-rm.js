#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

fs.unlinkSync(file);


