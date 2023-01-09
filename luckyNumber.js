//Write a function filterLucky/filter_lucky() that accepts a list of integers
// and filters the list to only include the elements that contain the digit 7.

function filterLucky(x) {
  return x.filter(el => el.toString().includes('7'))
}

console.log(filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]))
