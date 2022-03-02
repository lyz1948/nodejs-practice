module.exports = function arraySlice(arr, start, end) {
  var len = arr.length
  var range = []

  start = index(start, end)
  end = index(len, end, len)

  while(start < end) {
    range.push(arr[start++])
  }

  return range

  function index(len, pos, end) {
    if (pos == null) {
      pos = end || 0
    } else if (pos < 0) {
      pos = Math.max(pos + end, 0)
    } else {
      pos = Math.min(len, pos)
    }
    return pos
  }
}
