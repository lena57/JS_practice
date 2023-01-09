//palindrom is a word or phrase that is ridden the same in direct and opposite direction
//examples: racecar
//implement a function that is checking if the str is a polindrom

function palindrom(str){
  let strLow = str.toLowerCase().replace(/\s/g, "");

  console.log('strLow', strLow)
  let strOpos = ''
  for(let i = strLow.length-1; i>=0; i--){
    if(strLow[i]!==' '){
    strOpos += strLow[i]
    }
  }
  return strLow === strOpos
}

//second version
function pal(str){
  str = str.toLowerCase().replace(/\s/g, '');
  return str === str.split('').reverse().join('')
}

console.log(pal('raC eca R'))
