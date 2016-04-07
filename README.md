# minty-example

[Minty](https://github.com/lumpy-turnips/minty) is an awesome visualizer for your Node program's
flow. Example program

```js
// index.js
'use strict'

function add(a, b) {
  a += 10
  return a + b
}

function sub(a, b) {
  return add(a, -b)
}
console.log(sub(2, 3))
```

Create a separate file `minty.js` that just loads `index.js`

```js
// minty.js
const minty = require('minty')
minty.file(require('path').join(__dirname, 'index.js'))
```

and install the tool itself `npm i -D minty`

Let's run!

```sh
$ node minty.js
9
```

It also created `minty/file/index<timestamp>html` file, like this one 
[index.html](minty/file/index.html)
