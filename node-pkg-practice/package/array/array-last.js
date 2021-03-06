var isNumber = require('../number/is-number')

module.exports = function last(arr, num) {
  if (!Array.isArray(arr)) {
    throw new Error('expected the first argument to be an array')
  }

  var len = arr.length
  if (len === 0) {
    return null
  }

  num = isNumber(num) ? +num : 1;
  if (num === 1) {
    return arr[len-1]
  }

  var res = new Array(num)
  while(num--) {
    res[num] = arr[--len]
  }
  return res
}