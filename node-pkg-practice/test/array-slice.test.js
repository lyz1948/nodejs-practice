const test = require('ava')
const arraySlice = require('../package/array/array-slice')

test('array slice', t => {
  t.deepEqual(arraySlice([1, 2, 3, 4, 5], 0, 3), [1, 2, 3])
})