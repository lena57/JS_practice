// Так же нужно будет написать такие функции :
// 1)функция принимает массив , а возвращает его копию без последнего элемента .
// function withNoLast(arr){
//   return arr.slice(0, arr.length-1)
// }
function arrWithNoLastEl(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
//console.log(arrWithNoLastEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// 2) функция принимает массив , а возвращает его копию без первого элемента .
 function arrWithNoFirst(arr){
  let newArr = [];
  for(let i = 1; i < arr.length; i++){
    newArr.push(arr[i])
   }
    return newArr;
 }
//console.log(arrWithNoFirst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// 3) функция принимает массив и элемент, а возвращает его копию ,
// при условии что первый элемент массива , это второй аргумент функции .
function arrWithFirstEl(arr, el){
  let newArr = [];
  newArr.push(el)
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i])
  }
  return newArr
}
console.log(arrWithFirstEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0))

// 4) функция принимает массив и два числа , а возвращает массив в диапазоне
// двух крайних аргументов функции . Пример :
// ([0, 1, 2, 3, 4, 5] , 1, 4) -> [1, 2, 3, 4] ;
function arrWithRange(arr, num1, num2){
  let newArr = [];
  for(let i = num1; i <= num2; i++){
    newArr.push(arr[i])
  }
  return newArr
}

console.log( arrWithRange([0, 1, 2, 3, 4, 5], 1, 4 ))
