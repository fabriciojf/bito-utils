/**
 * Use strings
 */
var string = require('./strings');

/**
 * Module exports
 */ 
module.exports = Dates;

/**
 * Dates Constructor
 */ 
function Dates() {}

Dates.prototype.toDate = function(date) {
    return string.prototype.format("{0}/{1}/{2}",
            date.getFullYear(),
            (date.getMonth()+1 < 10 ? "0" : "")+date.getMonth()+1,
            (date.getDate() < 10 ? "0" : "")+(date.getDate())) ;
};

Dates.prototype.toDateTime = function(date) {
    return string.prototype.format("{0}/{1}/{2} {3}:{4}:{5}",
            date.getFullYear(),
            (date.getMonth()+1 < 10 ? "0" : "")+(date.getMonth()+1),
            (date.getDate() < 10 ? "0" : "")+(date.getDate()),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds());
};

Dates.prototype.toTime = function(date) {
    return string.prototype.format("{0}:{1}:{2}",
            date.getHours(),
            date.getMinutes(),
            date.getSeconds());
};