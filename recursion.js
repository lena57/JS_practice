//add all elements of array using recursion

function addElements(arr) {
  if (arr.length === 0) {
    return 0
  }
  if (arr.length === 1) {
    return arr[0]
  } else {
    return arr.pop() + addElements(arr)
  }
}
//console.log(addElements([3, 8, -23, 9, 4, 56]))

//output is sum of all positive numbers from n to 0

function sumOfPos(num){
  if(num<=0){
    return 0
  }else{
    return num + sumOfPos(num-1)
  }
}
console.log(sumOfPos(3))
