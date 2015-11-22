var path = process.argv[2];
var fancify = require(path);
var assert = require('assert');
var test = require('tape');

test('fancify blablabla', function(t){
    var wrapper = '~*~';
    var str = 'Hello';
    t.ok(addwrapper(str, wrapper) == fancify(str), 't1 should true');
    t.ok(addwrapper(str.toUpperCase(), wrapper) === fancify(str, true), 'p2_1');
    t.ok(addwrapper(str, '~!~') === fancify(str, false, '!'), 'p3_1');
    t.ok(addwrapper(str.toUpperCase(), '~!~') === fancify(str, true, '!'), 'p3_1');
    t.end();
});

var addwrapper = function(str, wrapper){
    return wrapper + str + wrapper;
};
