const defaultComparator = (a, b) => {
  return a - b
}

module.exports = function checksort(arr, fn) {
  if (!Array.isArray(arr)) throw new TypeError('Expected Array, got ' + (typeof arr))

  const comparator = fn || defaultComparator 

  for (let i = 1, len = arr.length; i < len; i++) {
    if (comparator(arr[i -1], arr[i]) > 0) return false
  }
  return true
}
