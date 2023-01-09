//I am working on Coderbyte coding challenge called Simple Password and
// the instructions read as following:
//
// Have the function SimplePassword(str) take the str parameter
// being passed and determine if it passes as a valid password that
// follows the list of constraints:
//
//     It must have a capital letter.
//     It must contain at least one number.
//     It must contain a punctuation mark => (. , ! ? : ; )
//     It cannot have the word "password" in the string.
//     It must be longer than 7 characters and shorter than 31 characters.
//
// If all the above constraints are met within the string, your program
// should return the string true, otherwise your program should return the string
// false. For example: if str is "apple!M7" then your program should return "true".
//
// Input: "passWord123!!!!"
// Output: false
//
// Input: "turkey90AAA!"
// Output: true

function SimplePassword(str) {
  if (str.length < 8 || str.length > 30) {
    return false
  }
  if (str.toLowerCase().includes('password')) {
    return false
  }
  if (!str.match(/[A-Z]/)) {
    return false
  }
  if (!str.match(/[0-9]/)) {
    return false
  }
  if (!str.match(/[.,!?;:]/)) {
    return false
  }
  return true
}


function checkPassword(p){
  if(p<8 || p>30) return false;
  if(p.toLowerCase().includes('password')) return false;
  if(!p.match(/[A-Z]/)) return false;
  if(!p.match(/[0-9]/)) return false;
  if(!p.match(/[.,!?:;]/)) return false;
  return true;
}

console.log(checkPassword('passWord123!!!!'))
