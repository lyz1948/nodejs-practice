module.exports = function flatArr(arr) {
  return flat(arr, [])

  function flat(arr, res) {
    var cur
    var len = arr.length

    for (var i = 0; i < len; i++) {
      cur = arr[i]
      Array.isArray(cur) ? flat(cur, res) : res.push(cur)
    }
    return res
  }
}
