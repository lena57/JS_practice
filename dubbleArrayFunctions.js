function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //formula Math.floor(Math.random()(max-min+1))+min allows to get
  // integer random number from min to max values
}

//fills array with random numbers
function arrNumber(length, min, max) {
  const arr1 = [];
  for (let i = 0; i < length; i++) {
    arr1.push(randomNumber(min, max))
  }
  return arr1
}

function doubleArray(l) {
  let arr = []
  for (let i = 0; i < l; i++) {
    arr.push(arrNumber(5, -9, 9))
  }
  return arr
}

function beauty(arr) {            //returns elements of array as strings
  for (let i = 0; i < arr.length; i++) {
    let str = ''
    for (let j = 0; j < arr[i].length; j++) {
      j !== arr[i].length - 1 ? str += arr[i][j] + ', ' : str += arr[i][j];
    }
    console.log(str)
  }
}

//beauty(doubleArray(5))

//1)Заменить все элементы их квадратами.
function square(arr) {
  console.log('arr', arr)
  return arr.map(el => {
    return el.map(el => el * el)
  })
}

//second version
function square2(arr) {
  console.log('arr', arr)
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let arr1 = []
    for (let j = 0; j < arr[i].length; j++) {
      arr1.push(arr[i][j] ** 2)
    }
    res.push(arr1)
  }
  return res
}

//console.log(square2(doubleArray(3)))

//2)Найти сумму всех элементов, имеющих оба нечетных индекса.
function sumOfOddIndexes(arr) {
  console.log('arr', arr)
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i % 2 !== 0 && j % 2 !== 0) {
        sum += arr[i][j]
      }
    }
  }
  return sum
}

//console.log(sumOfOddIndexes(doubleArray(5)))

//3)Вывести на экран элементы массива, кратные 5, и их индексы.
function multipleOfFive(arr) {
  console.log('arr', arr)
  let res = []
  let result = []
  let indexI = []
  let indexJ = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 5 === 0) {
        res.push(arr[i][j])
        indexI.push(i)
        indexJ.push(j)
      }
    }
  }
  for (let i = 0; i < res.length; i++) {
    result.push({'element': res[i], 'indexI': indexI[i], 'indexJ': indexJ[i]})
  }
  return result
}

//console.log(multipleOfFive(doubleArray(5)));

//4)Напечатать левую и правую диагонали двумерного массива.
function diagonal(arr) {
  console.log('arr', arr)
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i][i])
  }
  return res
}

//console.log(diagonal(doubleArray(5)))

//5)Найти сумму элементов правой диагонали и произведение элементов левой диагонали.
function sumAndMultiply(arr) {
  console.log('arr', arr)
  let sum = 0
  let multiply = 1
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i]
    multiply *= arr[i][arr.length - 1 - i]
  }
  return {sum, multiply}
}

//console.log(sumAndMultiply((doubleArray(5))))

//6)Найти индексы отрицательных чисел.
function negativeNumInd(arr) {
  console.log('arr', arr)
  let res = []
  let indexI = []
  let indexJ = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < 0) {
        res.push(arr[i][j])
        indexI.push(i)
        indexJ.push(j)
      }
    }
  }
  for (let i = 0; i < res.length; i++) {
    res[i] = {'element': res[i], 'indexI': indexI[i], 'indexJ': indexJ[i]}
  }
  return res
}
//console.log(negativeNumInd(doubleArray(5)))

//7)Найти среднее арифметическое каждого из столбцов.
function averageOfColumns(arr){
  console.log('arr', arr)
  let res = []
  for(let i=0; i<arr.length; i++){
    let sumOfCol = 0
    for(let j=0; j<arr[i].length; j++){
      sumOfCol += arr[j][i]
    }
    res.push(sumOfCol/arr.length)
  }
  return res
}
//console.log(averageOfColumns(doubleArray(5)))

//8)Поменять местами первую и последнюю строку.
function changeFirstAndLast(arr){
  console.log('arr', arr)
  let res = []
  for(let i=0; i<arr.length; i++){
    res.push(arr[i])
  }
  res[0] = arr[arr.length-1]
  res[arr.length-1] = arr[0]
  return res
}
//console.log(changeFirstAndLast(doubleArray(5)))

//9)Поменять местами первый и последний столбец.
function changeFirstAndLastCol(arr){
  console.log('arr', arr)
  let res = []
  for(let i=0; i<arr.length; i++){
    res.push(arr[i])
  }
  //console.log('res', res)
  for(let i=0; i<arr.length; i++){
    let temp = res[i][0]
    res[i][0] = arr[i][arr.length-1]
    res[i][res.length-1] = temp
  }
  return res
}
//console.log(changeFirstAndLastCol(doubleArray(5)))

//10)Найти строку с наибольшей суммой элементов.
function maxSumOfRow(arr){
  console.log('arr', arr)
  let res = []
  for(let i=0; i<arr.length; i++){
    let sum = 0
    for(let j=0; j<arr[i].length; j++){
      sum += arr[i][j]
    }
    res.push(sum)
  }
  //console.log('res', res)
  let max = res[0]
  let index = 0
  for(let i=0; i<res.length; i++){
    if(res[i]>max){
      max = res[i]
      index = i
    }
  }
  return {max, index}
}
//console.log(maxSumOfRow(doubleArray(5)))

//11)Найти столбец с наибольшей суммой элементов.
function maxSumOfCol(arr){
  console.log('arr', arr)
  let res = []
  for(let i=0; i<arr.length; i++){
    let sum = 0
    for(let j=0; j<arr[i].length; j++){
      sum += arr[j][i]
    }
    res.push(sum)
  }
  //console.log('res', res)
  let max = res[0]
  let index = 0
  for(let i=0; i<res.length; i++){
    if(res[i]>max){
      max = res[i]
      index = i
    }
  }
  return {max, index}
}

//console.log(maxSumOfCol(doubleArray(5)))

//12)Найти сумму всех четных элементов.
function sumOfEven(arr){
  console.log('arr', arr)
  let sum = 0
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
      if(arr[i][j]%2===0){
        sum += arr[i][j]
      }
    }
  }
  return sum
}
//console.log(sumOfEven(doubleArray(5)))

//13)Найти номер строки, для которой средне-арифметическое значение ее элементов максимально.
function maxAverageOfRow(arr){
  console.log('arr', arr)
  let res = []
  for(let i=0; i<arr.length; i++){
    let sum = 0
    for(let j=0; j<arr[i].length; j++){
      sum += arr[i][j]
    }
    res.push(sum/arr.length)
  }
  console.log('res', res)
  let max = res[0]
  let index = 0
  for(let i=0; i<res.length; i++){
    if(res[i]>max){
      max = res[i]
      index = i
    }
  }
  return {max, index}
}
//console.log(maxAverageOfRow(doubleArray(5)))

