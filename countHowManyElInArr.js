// Написать сортировку ,
// которая будет искать и запоминать цифры в массиве , количество их повторений ,
// а после выставлять их в порядке возрастания.
// Есть массив [1, 1, 1, 4, 1, 4, 2, 2, 2], наша функция должна должна посчитать
// сколько каких элементов и вернуть: [1, 1, 1, 1, 2, 2, 4, 4].

function arrUnique(arr) {   //function for digits in array without duplicates
  let arrOfUniq = []
  arrOfUniq.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    let flag = true
    for (let j = 0; j < arrOfUniq.length; j++) {
      if (arr[i] === arrOfUniq[j]) {
        flag = false
        break;
      }
    }
    if (flag) {
      arrOfUniq.push(arr[i]);
    }
  }
  return arrOfUniq
}

//console.log(arrUnique([1, 1, 1, 4, 1, 4, 2, 2,3, 7, 8, 7, 8, 3, 3, 2]))

function sortArrAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        max = arr[i]
        arr[i] = arr[j]
        arr[j] = max
      }
    }
  }
  return arr;
}

//console.log(sortArrAsc([1, 1, 1, 4, 1, 4, 2, 2,3, 7, 8, 7, 8, 3, 3, 2]))

function arrOfDigitsCount(arr) {
  let resultCount = [];
  let newArrSorted = [];
  let arrWithNoDuplicates = arrUnique(arr)
  console.log('arrWithNoDuplicates', arrWithNoDuplicates)
  let arrSorted = sortArrAsc(arrWithNoDuplicates);
  console.log('arrSorted', arrSorted)
  let flag = false;
  for (let i = 0; i < arrSorted.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arrSorted[i] === arr[j]) {
        flag = true;
      }
      if (flag) {
        count++;
        flag = false;
      }
    }
    resultCount.push(count)
  }
  console.log('resultCount', resultCount)
  //sort array in ascending order using previous functions
  //return sortArrAsc(arr) or
  for (let i = 0; i < resultCount.length; i++) {
    for (let j = 0; j < resultCount[i]; j++) {
      newArrSorted.push(arrSorted[i])
    }
  }
  return newArrSorted
}
console.log(arrOfDigitsCount([1, 1, 1, 4, 1, 4, 9, 9, 2, 2,3, 7, 8, 7, 8, 3, 3, 2, 9]))


