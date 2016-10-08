var assert = require('assert'),
    strings = require('../../lib/tools/strings.js'); 

describe("strings-ut", function() {
    describe("request", function() {
        it('formatETest', function(){
            strings.prototype.format("{0}-{1}", "p0", "p1", function(response){
                assert.equal("p0-p1", response);
            });
        });

        it('formatNETest', function(){
            strings.prototype.format("{0}-{1}", "p0", "p1", function(response){
                assert.notEqual("{0}-p1", response);
            });
        });
    });
});
