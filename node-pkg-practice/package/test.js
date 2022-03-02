const arrayLast = require('./array/array-last')
const arrayFirst = require('./array/array-first')
const arrayFlat = require('./array/array-flat')

console.log(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f']))
console.log(arrayLast(['a', 'b', 'c', 'd', 'e', 'f'], 3))
console.log(arrayFlat([['a'], ['b'], ['c'], ['d'], ['e'], ['f']]))