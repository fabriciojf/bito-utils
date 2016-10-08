var assert = require('assert'),
    index = require('../index.js'), 
    strings = require('../lib/tools/strings'),
    dates = require('../lib/tools/dates');

describe("index-ut", function() {
    describe("request", function() {
        it('stringETest', function(){
            assert.equal(index.String, strings);   
        });
        it('datesETest', function(){
            assert.equal(index.Date, dates);   
        });
    });
});
