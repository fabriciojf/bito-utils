
# bito.utils

[Personal Site](https://fabriciojf.com)

## Description

Utilities javascript to [Node.js](https://nodejs.org), library to study how to publish NPM in npm.org


## Install

As it is simple and useful javascript functions, you can download the package for server node.js

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
var bDate = new index.Date();
console.log(bDate.toDate(new Date()));
```

### Strings

```js
/**
 * How to Use
 * String.format example
 */
var bito = require('bito.utils');
var bString = new index.String();
console.log(bString.format("{0} to {1}", "bito.utils", "node.js"));
```

#### Output
See [momentjs](http://momentjs.com/)
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
var bDate = new index.Date();
console.log(bDate.toDateTime(new Date()));
console.log(bDate.toTime(new Date()));
console.log(bDate.toDate(new Date())); 
```

#### Output
```console
2016/10/08 8:14:41
8:14:41
2016/91/08
```
