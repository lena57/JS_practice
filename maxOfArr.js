function maxOfArr(arr){
  let max = arr[0]
  let indexOfMax = 0
  for(let j=0; j<arr.length; j++){
    if(arr[j]>max){
      max = arr[j];
      indexOfMax = j;
    }
  }
  return [max, indexOfMax]
}

console.log(maxOfArr([-7, 9993, 5, -1, 7, 0, 99, 5, -90, 122, 67]))
