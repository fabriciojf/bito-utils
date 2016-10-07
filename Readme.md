
# bito.utils

[![Personal Site](https://fabriciojf.com)](https://fabriciojf.com)

## How to use

The following example attaches bito.utils to a plain Node.JS
HTTP server listening on port `3000`.

```js
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
```