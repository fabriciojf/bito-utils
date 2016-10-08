
strings = require('./tools/strings');
dates = require('./tools/dates');

/**
 * Module exports
 */ 
module.exports = Utils;

/**
 * String Constructor
 */ 
function Utils() {}

/**
 * String Functions
 */
Utils.String = strings;
Utils.Date = dates;