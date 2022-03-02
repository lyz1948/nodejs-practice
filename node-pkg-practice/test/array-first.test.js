const test = require('ava')
const arrayFirst = require('../package/array/array-first')

test('array first', t => {
  t.is(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f']), 'a')
  t.is(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f'], 1), 'a')
  t.deepEqual(arrayFirst(['a', 'b', 'c', 'd', 'e', 'f'], 3), [ 'a', 'b', 'c' ])
})