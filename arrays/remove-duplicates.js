// Remove Duplicates : [1,2,3,4,5,6,7,5,2,1]
 function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
 }

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 5, 2, 1]));
