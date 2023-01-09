//sort an array and find a particular element in array using
// binary search

function sortArrAndFindEl(arr, target) { // to do a binary search you have to sort an array
  let temp = arr[0]
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log('sort arr = ', arr)
  let left = 0;
  let right = arr.length - 1;
  let middle
  while (left <= right) {
    middle = Math.round((right - left) / 2) + left
    if (target === arr[middle]) {
      return middle
    } else if (target < arr[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return 'no element'
}

console.log(sortArrAndFindEl([6, 0, 9, -9, 33, 45, 90, -89, 1], -9))
