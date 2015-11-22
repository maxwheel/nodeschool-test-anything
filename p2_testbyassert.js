var path = process.argv[2];
var isCoolNumber = require(path);
var assert = require('assert');

assert.ok(isCoolNumber(42),"should OK!");
