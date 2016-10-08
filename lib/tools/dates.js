/**
 * Use strings
 */
var BitoString = require('./strings');

/**
 * Module exports
 */ 
module.exports = Dates;

/**
 * Dates Constructor
 */ 
function Dates() {}
Dates.prototype = {
    toDate: function(date) {
        var string = new BitoString();
        return string.format("{0}/{1}/{2}",
                date.getFullYear(),
                (date.getMonth()+1 < 10 ? "0" : "")+date.getMonth()+1,
                (date.getDate() < 10 ? "0" : "")+(date.getDate())) ;
    },

    toDateTime: function(date) {
        var string = new BitoString();
        return string.format("{0}/{1}/{2} {3}:{4}:{5}",
                date.getFullYear(),
                (date.getMonth()+1 < 10 ? "0" : "")+(date.getMonth()+1),
                (date.getDate() < 10 ? "0" : "")+(date.getDate()),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds());
    },

    toTime: function(date) {
        var string = new BitoString();
        return string.format("{0}:{1}:{2}",
                date.getHours(),
                date.getMinutes(),
                date.getSeconds());
    }       
}