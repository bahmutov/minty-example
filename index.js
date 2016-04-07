'use strict'

function add(a, b) {
  a += 10
  return a + b
}

function sub(a, b) {
  return add(a, -b)
}
console.log(sub(2, 3))
