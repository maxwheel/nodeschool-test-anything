var emotifyPath = process.argv[2];

var emotify = require(emotifyPath);

console.log(emotify(process.argv[3]));
