const test = require('ava')
const arrayLast = require('../package/array/array-last')

test('array last', (t) => {
  t.is(arrayLast(['a', 'b', 'c', 'd', 'e', 'f']), 'f')
  t.is(arrayLast(['a', 'b', 'c', 'd', 'e', 'f'], 1), 'f')
  t.deepEqual(arrayLast(['a', 'b', 'c', 'd', 'e', 'f'], 3), [ 'd', 'e', 'f' ])
})