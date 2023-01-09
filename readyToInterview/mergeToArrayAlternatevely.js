//Write a function that combines two arrays by alternatingly taking
// elements from each array in turn.

function mergeArrays(arr1, arr2) {
  let res = []
  let i = 0
  let j = 0
  while (i < arr1.length || j < arr2.length) {
    if (i < arr1.length) {
      res.push(arr1[i])
      i++
    }
    if (j < arr2.length) {
      res.push(arr2[j])
      j++
    }
  }
  return res
}

console.log(mergeArrays([1, 2, 3, 4, 5], ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c']))
