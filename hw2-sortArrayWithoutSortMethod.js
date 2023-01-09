function randomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
  //formula Math.floor(Math.random()(max-min+1))+min allows to get
  // integer random number from min to max values
}

function arrNumber(length, min, max){
  const arr1=[];
  for(let i=0; i<length; i++){
    arr1.push(randomNumber(min, max))

  }
  return arr1
}

function sortArr(arr){
  let max;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        max = arr[i];
        arr[i] = arr[j];
        arr[j] = max;
      }
    }
  }
  return arr;
}
//console.log(sortArr([6, -9, 1, 33, 6, 76, 45, 33, 90, 4]));

function previousSort(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(previousSort(arrNumber(10, -90, 67)))
