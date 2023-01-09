export default function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //formula Math.floor(Math.random()(max-min+1))+min allows to get
  // integer random number from min to max values
}

//fills array with random numbers
export default function arrNumber(length, min, max) {
  const arr1 = [];
  for (let i = 0; i < length; i++) {
    arr1.push(randomNumber(min, max))
  }
  return arr1
}

//fills array with arrays of random numbers
export default function doubleArray(l) {
  let arr = []
  for (let i = 0; i < l; i++) {
    arr.push(arrNumber(randomNumber(1, 4), -4, 4))
  }
  return arr
}

//console.log(doubleArray(3))

function beauty(arr) { //returns elements of array as strings
  for (let i = 0; i < arr.length; i++) {
    let str = ''
    for (let j = 0; j < arr[i].length; j++) {
      j !== arr[i].length - 1 ? str += arr[i][j] + ', ' : str += arr[i][j];
    }
    console.log(str)
  }
}

//beauty(doubleArray(3))

//return an array of a sum of elements of double arrays on corresponding positions
function sumOfArrays(randomDoubArr) {
  //console.log('randomDubArr', randomDoubArr)
  let maxOfLength = 0;
  for (let k = 0; k < randomDoubArr.length; k++) {
    if (randomDoubArr[k].length > maxOfLength) {
      maxOfLength = randomDoubArr[k].length
    }
  }
  let arr1 = []
  let arr2 = []
  let i = 0
  do {
    arr1 = []
    for (let j = 0; j < randomDoubArr.length; j++) {
      arr1.push(randomDoubArr[j][i])
    }
    arr2.push(arr1)
    i++
  } while (i < maxOfLength)
  //console.log('arr2', arr2)
  let arr3 = []
  for (let i = 0; i < arr2.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr2[i].length; j++) {
      if (arr2[i][j] === undefined) {
        arr2[i][j] = 0
      }
      sum += arr2[i][j]
    }
    arr3.push(sum)
  }
  // console.log('arr2WithZeros', arr2)
  return arr3
}

function maxOfLen(arr) {
  let maxOfLength = 0
  for (let k = 0; k < arr.length; k++) {
    if (arr[k].length > maxOfLength) {
      maxOfLength = arr[k].length
    }
  }
  return maxOfLength
}

//second version
function sumOfArrays2(randomDoubAr) {
  beauty(randomDoubAr)
  let resArr = []
  let maxOfLength = maxOfLen(randomDoubAr);
  let sum = 0
  for (let j = 0; j < maxOfLength; j++) {
    sum = 0
    for (let n = 0; n < randomDoubAr.length; n++) {
      if (j >= randomDoubAr[n].length) {
        continue;
      }
      sum += randomDoubAr[n][j]
    }
    resArr.push(sum)
  }
  return resArr
}

console.log(sumOfArrays2(doubleArray(7)))
