
/**
 * Running node.js 
 */
var http = require('http').createServer();
http.listen('3005');

/**
 * How to Use
 * String.format example
 */
var string = require('./tools/strings');
console.log(string.prototype.format("{0} to {1}", "bito.utils", "node.js")); 