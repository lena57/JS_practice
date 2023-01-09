//split array into n chunks of size n
function chunk(arr, n) {
  let res = []
  let i = 0
  do {
    res.push(arr.slice(i, i + n))
    i += n
  } while (i < arr.length)
  return res
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
