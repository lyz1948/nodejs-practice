const test = require('ava')
const arrayFlat = require('../package/array/array-flat')

test('array flat', t => {
  t.deepEqual(arrayFlat([[1], [2], [3]]), [1, 2, 3])
})