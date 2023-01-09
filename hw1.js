//    [-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// -> [-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrPractice1 = (arr) => {
  return arr
}
//console.log(arrPractice1([-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
const arrForEach1 = (arr) => {
  const arr13 = []
  arr.forEach(el => arr13.push(el))
  return arr
}
//console.log(arrForEach([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

//[-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] -> [-3, -2, -1]
const arrPractice2 = (arr) => {
  let arrNeg = []
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < 0) {
  //     arrNeg.push(arr[i])
  //   }
  //}
  arr.forEach(el => el < 0 ? arrNeg.push(el) : el)
  return arrNeg
  //return arr.filter(el => el < 0)
}
//console.log(arrPractice2([-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

//[-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] -> [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrPractice3 = (arr) => {
  const arrPos = []
  //return arr.filter(el => el > 0)
  arr.forEach(el => el > 0 ? arrPos.push(el) : el)
  return arrPos
}
//console.log(arrPractice3([-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

//    [-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// -> [3 , 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const arrPractice4 = (arr) => {
  const arrOpos = []
  //return arr.map(el => -el)
  arr.forEach(el => arrOpos.push(-el))
  return arrOpos
}
//console.log(arrPractice4([-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

//[-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] -> [-2, 0, 2, 4, 6, 8];
const arrPractice5 = (arr) => {
  //return arr.filter(el => el % 2 === 0)
  const arrEvenInd = []
  arr.forEach((el, ind) => ind % 2 ? arrEvenInd.push(el) : el);
  return arrEvenInd;
}
//console.log(arrPractice5([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

//[-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] -> [-3 , -1, 1, 3, 5, 7, 9];
const arrPractice6 = (arr) => {
  return arr.filter(el => el % 2)
}
//console.log(arrPractice6([-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

//[-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// -> [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3];
const arrPractice7 = (arr) => {
  let arrReverse = []
  // for (let i = 0; i < arr.length; i++) {
  //   arrReverse.unshift(arr[i])
  // }
  arr.forEach(el => arrReverse.unshift(el))
  return arrReverse;
  //return arr.reverse()
}
//console.log(arrPractice7([-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

//[-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]
// -> [-3 , -1, 1, 3, 5, 7, 9, 12];
const arrPractice8 = (arr) => {
  return arr.filter((el, ind) => ind % 2 === 0)
}
//console.log(arrPractice8([-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

//[-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] -> 39;
const arrPractice9 = (arr) => {
  //return arr.reduce((sum, el) => sum + el, 0)
  let sum = 0;
  arr.forEach(el => sum += el)
  return sum
}
//console.log(arrPractice9([-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

//[-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] -> [9, 4, 1, 0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
const arrPractice10 = (arr) => {
  return arr.map(el => el ** 2)
}
//console.log(arrPractice10([-3 , -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

//Возвращает массив с числами которые повторяются больше одного раза
// 		[-3 , -2, -1, 0, 1, 2, 3, 4, 2, 5, 6, 7, -3, 8, 9, 4] -> [2, -3, 4];
const arrPractice11 = (arr) => {
  // let arr2 = arr.filter((el, ind) => ind !== arr.indexOf(el));
  // return arr2
  const arrWithoutDuplicates = []
  arr.forEach((el, ind) => ind !== arr.indexOf(el) ? arrWithoutDuplicates.push(el) : el)
  return arrWithoutDuplicates
}
//console.log(arrPractice11([-3, -2, -1, 0, 1, 2, 3, 4, 2, 5, 6, 7, -3, 8, 9, 4]))

//Возвращает массив с числами которые НЕ повторяются в полученном массиве:
// 		[-3 , -2, -1, 0, 1, 2, 3, 4, 2, 5, 6, 7, -3, 8, 9, 4] -> [-2, -1, 0, 1, 3, 5, 6, 7, 8, 9];
const arrPractice12 = (arr) => {
  // let arr2 = arr.filter((el) => arr.lastIndexOf(el) === arr.indexOf(el));
  // return arr2
  const arrUnique = []
  arr.forEach(el => arr.indexOf(el) === arr.lastIndexOf(el) ? arrUnique.push(el) : el)
  return arrUnique
}
console.log(arrPractice12([-3, -2, -1, 0, 1, 2, 3, 4, 2, 5, 6, 7, -3, 8, 9, 4]))
