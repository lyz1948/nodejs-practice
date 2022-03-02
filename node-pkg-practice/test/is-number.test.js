const test = require('ava')
const isNumber = require('../package/number/is-number')

test("is number", (t) => {
  t.is(isNumber(0), true)
  t.is(isNumber(+[]), true)
  t.is(isNumber('0xff'), true)
  t.is(isNumber('10.10'), true)
  t.is(isNumber(parseInt('10f')), true)
})