var assert = require('assert'),
    dates = require('../../lib/tools/dates.js'); 

describe("dates-ut", function() {
    describe("request", function() {
        it('toDateETest', function(){
            dates.prototype.toDate(new Date("2016-10-08"), function(response){
                assert.equal("2016/10/08", response);
            });
        });

        it('toDateTimeETest', function(){
            dates.prototype.toDateTime(new Date("2016-10-08 10:10:10"), function(response){
                assert.equal("2016/10/08 10:10:10", response);
            });
        });

        it('toTimeETest', function(){
            dates.prototype.toTime(new Date("11:11:11"), function(response){
                assert.equal("11:11:11", response);
            });
        });
    });
});
