// 1)Найти элемент строки, который повторяется больше всего раз и
// вывести в консоль количество повторений : “aaabcxdbddd” -> d : 4;

export default function maxNumber(arr) {  // return max value and index of max value
  let max = arr[0]
  let index = 0
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
      index = i
    }
  }
  return index
}

//console.log(maxNumber([3, 7, 1, 9, 44, 0, 2]))

function letterCount(str) {
  let resultCount = [];
  let strUnique = unique(str)
  for (let i = 0; i < strUnique.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (strUnique[i] === str[j]) {
        count++
      }
    }
    resultCount.push(count)
  }
  // for (let i = 0; i < resultCount.length; i++) {
  //   if (resultCount[i] === maxNumber(resultCount))
  //     return `${strUnique[i]} : ${resultCount[i]}`
  // }

  let index = maxNumber(resultCount)
  return [str[index], resultCount[index]]
}

let result = letterCount('aaabcxdbdaaadd')
//console.log(`${result[0]}: ${result[1]}`)

//second version for task#1

function numberOfLetters(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    } else {
      obj[str[i]] += 1
    }
  }
  //console.log(obj);
  const max = Math.max(...Object.values(obj))
  const arrKey = Object.keys(obj)
  const arrValue = Object.values(obj)
  for (let i = 0; i < arrKey.length; i++) {
    if (arrValue[i] === max) {
      return `${arrKey[i]}: ${arrValue[i]}`
    }
  }
}

//console.log(numberOfLetters('aaaaaxxxabbbbbcxxxxdbbbbbbbddd'));

// 2.Нужно отсортировать массив по числу повторений элементов в порядке убывания и
// вывести количество повторений элементов: “aoooooooawwwwabssrorabrwwwoo” -> a : 4, b : 2, s : 2;
function srtArrDecrease(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    } else {
      obj[str[i]] += 1
    }
  }
  // console.log('obj', obj);
  let min = 0
  let tempStr = ''
  let resultObject = {}
  const arrKey = Object.keys(obj)
  const arrValue = Object.values(obj)
  for (let i = 0; i < arrKey.length; i++) {
    for (let j = i + 1; j < arrKey.length; j++) {
      if (arrValue[i] < arrValue[j]) {
        min = arrValue[i]
        tempStr = arrKey[i]
        arrValue[i] = arrValue[j]
        arrKey[i] = arrKey[j]
        arrValue[j] = min
        arrKey[j] = tempStr
      }
    }
  }
  for (let i = 0; i < arrKey.length; i++) {
    resultObject[arrKey[i]] = arrValue[i]
  }
  return resultObject
}

//console.log(srtArrDecrease('aoooooooawwwwabssrorabrwwwooq'))

//3)Отсортировать строку по алфавиту :
// “bdcadv” -> “abcddv” ;

function strSortAlfa(str) {
  let max = 0
  let strToArr = str.split('')
  for (let i = 0; i < strToArr.length; i++) {
    for (let j = i + 1; j < strToArr.length; j++) {
      if (strToArr[i] > strToArr[j]) {
        max = strToArr[i]
        strToArr[i] = strToArr[j]
        strToArr[j] = max
      }
    }
  }
  return strToArr.join('')
}

//console.log(strSortAlfa('addaabxssdadxxx'))

//second version
function strSort(str) {
  return str.split('').sort().join('')
}

//console.log(strSort('bdcadv'))

//4)удалить все повторяющиеся элементы строки:
// “aaabssad” -> “absd”;
export default function unique(str) {   //function for unique letters
  let strUnique = str[0]
  for (let i = 1; i < str.length; i++) {
    let flag = true
    for (let j = 0; j < strUnique.length; j++) {
      if (str[i] === strUnique[j]) {
        flag = false
        break;
      }
    }
    if (flag) {
      strUnique += str[i]
    }
  }
  return strUnique
}

//console.log(unique('uuasdsawsw'))

//other version of solution
function uniqueLetters(str) {
  const unique = [...new Set(str.split(''))].join('')
  return unique
}

//console.log(uniqueLetters('addaabxssdadxxx'))

//5)удалить все Не повторяющиеся элементы строки :
// “aaabssad” -> “aaaass”;
function delUniqueLetters(str) {
  let strSort = strSortAlfa(str) // "a a a a b d s s"
  let strUnique = unique(strSort) //"a b d s"
  let strRepeatLetter = ''
  for (let i = 0; i < strUnique.length; i++) {
    let flag = false
    for (let j = 0; j < strSort.length; j++) {
      if (strUnique[i] !== strSort[j]) {
        continue
      } else if (strUnique[i] === strSort[j] && strUnique[i] === strSort[j + 1]) {
        flag = true
      }
      if (flag) {
        strRepeatLetter += strSort[j]
      }
    }
  }
  return strRepeatLetter
}

//console.log(delUniqueLetters('aaabssad'))

function strRepeate(str) {
  return str.split('').filter(el => str.indexOf(el) !== str.lastIndexOf(el)).join('')
}

//console.log(strRepeate('aaabssad'))

//6)Изменить все элементы строки в верхний регистр :
// “aAbsdf” -> “AABSDF”;

function strToUpCase(str) {
  let strNew = ''
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      strNew += String.fromCharCode(str.charCodeAt(i) - 32)
    }
  }
  return strNew
}

//console.log(strToUpCase('aAbsdf'))

//7)Изменить все lowerCase to upperCase and upperCase to lowerCase:
// “aAAAbSSad” -> “AaaaBssAD”;
function lowerToUpperAndUpperToLower(str) {
  let strNew = ''
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      strNew += String.fromCharCode(str.charCodeAt(i) + 32)
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      strNew += String.fromCharCode(str.charCodeAt(i) - 32)
    }
  }
  return strNew;
}

//console.log(lowerToUpperAndUpperToLower('aAAAbSSad'))

//8)Проверить строку на special characters(кроме апострофа , запятой и точки) и вернуть true or false :
// “abdcv$” -> true;
// “He went smoke.” -> false;
// “He went smoke.)” -> true;
function specialChar(str) {
  let letters = ''
  let symbols = ''
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 ||
      str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122 ||
      str.charCodeAt(i) === 32 || str.charCodeAt(i) === 39 ||
      str.charCodeAt(i) === 44 || str.charCodeAt(i) === 46) {
      letters += str[i]
    } else symbols += str[i]
  }
  return [!!symbols.length, `symbols: ${symbols}`]
}

//console.log(specialChar('abdcv$'))

//9)Удалить все элементы строки в верхнем регистре:
// “AbcdvGSR” -> “bcdv”;
function delUpperCase(str) {
  let strNew = ''
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      strNew += str[i]
    }
  }
  return strNew
}

//console.log(delUpperCase('AbcdvGSR'))

//10)Проверить если строка является email ->
// “yana@pasv.com” -> true;
// “asdf@.com” -> false;
// “@pasv.com” -> false;
//let filter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


function nameOfEmail(email) {
  let name = ''
  let i = 0
  while (email[i] !== '@' && i < email.length && i < 64) {
    if ((email.charCodeAt(i) >= 33 && email.charCodeAt(i) <= 57) ||
      (email.charCodeAt(i) >= 65 && email.charCodeAt(i) <= 90) ||
      (email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 125)) {
      name += email[i]
    } else {
      console.log(email[i])
      return 0
    }
    i++
  }
  return name.length
}

//console.log(nameOfEmail('yana@pasv.com'))

function domainOfEmail(email) {
  let domain = ''
  const nameOfEm = nameOfEmail(email) //length of name
  if (!nameOfEm) {
    return false
  }
  let i = nameOfEm + 1
  if (email[i] === '.') {
    return false
  }
  while (email[i] !== '.' && i < email.length && i < 253) {
    if ((email.charCodeAt(i) >= 65 && email.charCodeAt(i) <= 90) ||
      (email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 122)) {
      domain += email[i]
    } else {
      return 0
    }
    i++
  }
  return nameOfEm + domain.length + 1
}

//console.log(domainOfEmail('yana@pasv.com'))

function highDomain(email) {
  let highDom = ''
  const domainAndName = domainOfEmail(email) // length of domain and name
  if (!domainAndName) {
    return false
  }
  let i = domainAndName + 1

  while (i < email.length && i < 264) {
    if ((email.charCodeAt(i) >= 65 && email.charCodeAt(i) <= 90) ||
      (email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 122)) {
      highDom += email[i]
    } else {
      return false
    }
    i++
  }
  return highDom.length >= 2
}

//console.log(highDomain('ssss@yhyhjkk.wr'))


//11)проверить если строка является рекламой при условии что каждая строка которая является рекламой
// будет содержать текст “This is Advertise” в не известном месте строки и с не известным регистром
// если строка хранит в себе рекламу , тогда печатаем ее
// в противном случае выводим на экран - “you cant public ads here, you are getting ban for 144 hours” :
// “bla-bla-bla This is Advertise” -> “you cant public ads here, you are getting ban for 144 hours”;
// ‘bla- tHiS iS aDvErTiSe bla-bla’ -> “you cant public ads here, you are getting ban for 144 hours”;
// “bla-bla-bla” -> “bla-bla-bla”;

function strToLowerCase(str) {
  let strNew = ''
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      strNew += String.fromCharCode(str.charCodeAt(i) + 32)
    }else{
      strNew+=str[i]
    }
  }
  return strNew
}

//console.log(strToLowerCase('WEDFGOPKjkjggfYYU'))
//str = 'bla- tHiS iS aDvErTiSe bla bla'

function ads(str) {
  const sentence = 'this is advertise'.split(' ');
  const strToLowCase = strToLowerCase(str).split(' ');
  let flag = false;
  for (let i = 0; i < strToLowCase.length-(sentence.length-1); i++) {
    if (strToLowCase[i] === sentence[0]) {
      for (let j = 1, indexI = i + 1; j < sentence.length; j++) {
        if (strToLowCase[indexI] === sentence[j]) {
          indexI++
        }else break;
        if (j === sentence.length - 1) {
          flag = true
        }
      }
    }
  }
   return flag ? 'you cant public ads here, you are getting ban for 144 hours' : str
}
console.log(ads('hi, how are you This is bla-bla-bla'))

function ad(str) {
  if (str.toLowerCase().includes('this is advertise')) {
    return 'you cant public ads here, you are getting ban for 144 hours'
  }
  return str
}

//console.log(ad('bla-bla-bla This is Advertise'))

function checkAds(str){
  const ad = 'this is advertise'.split(' ');
  let strToLowCase = str.toLowerCase().split(' ');
  let flag = false;
  for(let i=0; i<strToLowCase.length-ad.length+1; i++){
    if(strToLowCase[i]===ad[0]){
      for(let j=1, indexOfI=i+1; j<ad.length; j++){
        if(strToLowCase[indexOfI]===ad[j]){
          indexOfI++;
        }else break;
        if(j===ad.length-1){
          flag=true;
        }
      }
    }
  }
  return flag ? 'banned' : str
}

console.log(checkAds('Q ooko is vhvhvh ytyty this is advertise'))
