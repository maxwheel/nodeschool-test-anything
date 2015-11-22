var path = process.argv[2];
var repeatCallback = require(path);
var test = require('tape');

test('calln', function(t){
        t.plan(10);
        repeatCallback(10, function(){
            t.pass('callback called');
            });
        t.end();
        });

