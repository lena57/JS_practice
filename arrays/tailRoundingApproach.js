//We want to turn the given integer into a number that has only one non-zero
// digit using a tail rounding approach.
// This means that at each step we take the last non 0 digit of the number and
// round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than
// or equal to 5 we round it to 10 (rounding to 10 means increasing the next
// significant digit by 1).
// The process stops immediately once there is only one non-zero digit left.

//Example: For value = 15, the output should be 20

// For value = 1234, the output should be 1000.

// For value = 1445, the output should be 2000.

// function rounders(value) {
//   let arr = value.toString().split('');
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== '0'){
//       newArr.push(arr[i]);
//     }
//   }
//
//   let length = newArr.length;
//   while (length > 1) {
//     let lastEl = newArr[length - 1];
//     if (lastEl >= 5) {
//       newArr[length - 1] = 0;
//       if (newArr[length - 2] !== undefined) {
//         newArr[length - 2] = parseInt(newArr[length - 2]) + 1;
//       } else {
//         newArr.unshift(1);
//       }
//     } else {
//       newArr[length - 1] = 0;
//     }
//     length = newArr.length;
//   }
//
//   let result = newArr.join('');
//   return Number(result);
// }


function tailRoundingApproach(value) {
  let arr = value.toString().split('');
  let i = arr.length - 1;

  while (i > 0) {
    if (arr[i] >= 5) {
      arr[i - 1] = parseInt(arr[i - 1]) + 1;
    }
    arr[i] = 0;
    i--;
  }

  return parseInt(arr.join(''));
}

console.log(tailRoundingApproach(4567));

