const test = require('ava')
const isSameDate = require('../package/date/is-same-day')

test('is same date', t => {
  t.is(isSameDate(new Date('2020-01-01'), new Date('2020-01-01')), true)
})