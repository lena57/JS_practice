const arr = [[1, 2, 3, 4, 5, 6, 7, 8, 9]]

//write a logic to print all diagonal elements
function diagonalEl(arr) {
  arr = chunk(...arr)
  console.log(arr)
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[i].length; j++) {
      if (i === j) {
        newArr.push(arr[i][j]);
      }
    }
  }
  return newArr;
}
console.log(diagonalEl(arr));
function chunk(arr) {
  let res = []
  let i = 0
  do {
    res.push(arr.slice(i, i + 3))
    i += 3
  } while (i < arr.length)
  return res
}
