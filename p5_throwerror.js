var path = process.argv[2];
var feedCat = require(path);
var test = require('tape');

test('feedcat', function(t){
        t.throws(function(){
            feedCat('chocolate');
            });
        t.ok(feedCat('sth else') === 'yum', 'ok');
        t.end();
        });
