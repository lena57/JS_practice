//реализуй сортировку при условии что сначала цикл будет находить наименьший
// элемент массива (Во время вложенного цикла) и только после этого будет вставлять его на определенное место.
const arrNumber = require('./optimizedSortArray.js')

function sortArrAndPutMin(arr) {
  console.log(arr)
  let min = arr[0];
  let indexOfMin = 0;
  for (let i = 0; i < arr.length; i++) {
    min = arr[i];
    indexOfMin = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= min) {
        min = arr[j];
        indexOfMin = j;
      }
    }
    if (i !== arr.length - 1) {
      if (min !== arr[i]) {
        arr[indexOfMin] = arr[i]
        arr[i] = min
      }
    }
  }
  return arr
}
//console.log(sortArrAndPutMin([ 10, 3, 6, -8, -2, -10 ]))
//console.log(sortArrAndPutMin(arrNumber(6, -12, 12)))
