
# bito.utils

[Personal Site](https://fabriciojf.com)

## Description

Utilities javascript to [Node.js](https://nodejs.org) 


## Install

```console
$ npm install bito.utils
```

## How to use

The following example attaches bito.utils to a plain Node.JS
HTTP server listening on port `3005`.

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
var bito = require('bito.utils');
console.log(bito.String.prototype.format("{0} to {1}", "bito.utils", "node.js"));
```

### Strings

```js
/**
 * How to Use
 * String.format example
 */
var bito = require('bito.utils');
console.log(bito.String.prototype.format("{0} to {1}", "bito.utils", "node.js"));
```

#### Output
```console
bito.utils to node.js
```

### Dates

```js
/**
 * How to Use
 * String.format example
 */
var bito = require('bito.utils');
console.log(bito.Date.prototype.toDateTime(new Date()));
console.log(bito.Date.prototype.toTime(new Date())); 
console.log(bito.Date.prototype.toDate(new Date())); 
```

#### Output
```console
2016/10/08 8:14:41
8:14:41
2016/91/08
```