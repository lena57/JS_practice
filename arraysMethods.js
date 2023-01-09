//Provided is a function find which accepts two parameters in the following order:
// array, element and returns the index of the element if found and "Not found" otherwise

function findEl(arr, el) {
  let index = arr.indexOf(el)
  return index === -1 ? 'Not found' : index
}


//You are given a list of unique integers arr, and two integers a and b.
// Your task is to find out whether or not a and b appear consecutively in arr,
// and return a boolean value (True if a and b are consecutive, False otherwise).
function consecutive(arr, a, b) {
  let indexA = arr.indexOf(a)
  let indexB = arr.indexOf(b)
  return Math.abs(indexA - indexB) === 1 ? true : false
}
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4));
