
/**
 * Module exports
 */ 
module.exports = String;

/**
 * String Constructor
 */ 
function String(text) {
	this.text = text;
}

String.prototype.format = function(text) {
    var args = Array.prototype.slice.call(arguments, 1);
    return text.replace(/{(\d+)}/g, function(match, number) { 
    return typeof args[number] != 'undefined'
        ? args[number] 
        : match;
    });
};