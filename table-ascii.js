
const str = 'gft6jn4'; //'f'
console.log(str[1]);
console.log(str.charAt(1));//'f'// 1-index of 'f'
console.log(String.fromCharCode(97)); //'a'// from table Ascii under 97 code is 'a'
console.log(str.charCodeAt(1));//102// 1-index of 'f' and from table Ascii 'f' is under code 102

function numberGenerate(min, max){
  return Math.floor(Math.random()*(max-min+1)+min)
}

function anyLetter(min, max){
  return String.fromCharCode(numberGenerate(min, max))
}
//console.log(anyLetter(97, 122)); //all lowercase letter

function createStr(length){
  let countSmall=0
  let countBig=0
  let str=''
  for(let i=0; i<length;i++){
    if(numberGenerate(1, 100)<=50){
      str += anyLetter(65, 90);
      countBig++;
    } else{
      str += anyLetter(97, 122)
      countSmall++;
    }
  }
  console.log( 'countSmall:', countSmall, 'countBig:', countBig);
  return str
}
console.log(createStr(23));
