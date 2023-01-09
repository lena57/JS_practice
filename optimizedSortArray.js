function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //formula Math.floor(Math.random()(max-min+1))+min allows to get
  // integer random number from min to max values
}

function arrNumber(length, min, max) {
  const arr1 = [];
  for (let i = 0; i < length; i++) {
    arr1.push(randomNumber(min, max))
  }
  return arr1
}

module.exports = arrNumber;

function previousSort(arr) {
  let temp = 0;
  let startTime = performance.now();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  let endTime = performance.now();
  //console.log(endTime-startTime)
  return endTime - startTime;
}

let count1 = 0
for (let i = 0; i < 10; i++) {
  count1 += previousSort(arrNumber(10000, -900, 900));
}
const res1 = (count1 / 10) / 1000;
console.log('time for sort in sec:', res1)

//нужно во время поиска меньших значений , находить наибольшее значение
// и в зависимости от номера итерации ставить его на определенное место.
// На пример, при нахождении наибольшего элемента массива поставить его
// в конец, а во время следующей итерации при нахождении наибольшего элемента
// КРОМЕ того, которое уже находиться на последнем месте , установить его на
// предпоследнее, и так до тех пор пока массив не будет отсортирован.
// Идея оптимизации заключается в том , что бы уменьшить количество итераций ,
// тем самым уменьшив количество действий, а соответственно и времени на сортировку массива.
//[ 84, -41, -24, -90, 39 ]
function optimizedSort(arr) {
  let temp = 0;
  // console.log(arr)
  let startTime = performance.now();
  let max = arr[0];
  let indexOfMax = 0;
  for (let i = 0; i < arr.length - i; i++) {
    max = arr[i]
    for (let j = i + 1; j < arr.length - i; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      if (arr[j] >= max) {
        max = arr[j];
        indexOfMax = j
      }
    }
    arr[indexOfMax] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = max
  }
  let endTime = performance.now();
  return endTime - startTime;
  //return arr
}

let count = 0
for (let i = 0; i < 10; i++) {
  count += optimizedSort(arrNumber(10000, -900, 900));
}
const res = (count / 10) / 1000
console.log('time for optimizedSort in sec:', res)
// console.log(optimizedSort(arrNumber(5, -9, 9)))
// console.log(`optimizedSort is faster than previousSort in ${Math.round(res1 / res)} times`)


//Задача:
// Оптимизировать сортировку , которую мы реализовали на занятии .
// Каким образом :
// Во время вложенного цикла , нужно находить наименьший элемент
// массива и только после этого ставить его на нужное нам место .

function optSortFindMaxAndMin(arr) {
  //console.log(arr)
  let startTime = performance.now();
  let max = arr[0];
  let indexOfMax = 0;
  let min = arr[0];
  let indexOfMin = 0
  for (let i = 0; i < arr.length / 2; i++) {
    max = arr[i]
    indexOfMax = i
    min = arr[i]
    indexOfMin = i
    for (let j = i + 1; j < arr.length - i; j++) {
      if (arr[j] >= max) {
        max = arr[j];
        indexOfMax = j
      }
      if (arr[j] <= min) {
        min = arr[j];
        indexOfMin = j;
      }
    }
    arr[indexOfMax] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = max

    if (arr[indexOfMax] === min) {
      indexOfMin = indexOfMax
    }
    arr[indexOfMin] = arr[i]
    arr[i] = min
  }
  let endTime = performance.now();
  return endTime - startTime;
  //return arr
}
let count2 = 0
for (let i = 0; i < 10; i++) {
  count2 += optSortFindMaxAndMin(arrNumber(10000, -900, 900));
}
const result = (count2 / 10) / 1000

console.log('time for optSortFindMaxAndMin in sec:', result)
