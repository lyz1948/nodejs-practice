const test = require("ava")
const isSorted = require("../package/array/is-sorted")

test("isSorted", (t) => {
  t.is(isSorted([1, 2, 3]), true)
})
