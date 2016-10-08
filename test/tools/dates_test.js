var assert = require('assert'),
    BitoDates = require('../../lib/tools/dates.js'); 

describe("dates-ut", function() {
    describe("request", function() {
        it('toDateETest', function(){
            var dates = new BitoDates();
            dates.toDate(new Date("2016-10-08"), function(response){
                assert.equal("2016/10/08", response);
            });
        });

        it('toDateTimeETest', function(){
            var dates = new BitoDates();
            dates.toDateTime(new Date("2016-10-08 10:10:10"), function(response){
                assert.equal("2016/10/08 10:10:10", response);
            });
        });

        it('toTimeETest', function(){
            var dates = new BitoDates();
            dates.toTime(new Date("11:11:11"), function(response){
                assert.equal("11:11:11", response);
            });
        });
    });
});
