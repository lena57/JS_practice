// given array [7, 1, 2, -3, 5]. Take away [2, -3]
// from array and return [7, 1, 5]

function diffOfArr(arr1, arr2){
  let res = []
  for(let i = 0; i < arr1.length; i++){
    if(!arr2.includes(arr1[i])){
      res.push(arr1[i])
    }
  }
  return res
}

console.log(diffOfArr([7, 1, 2, -3, 5], [2, -3]))
