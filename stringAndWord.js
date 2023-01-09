//write a function that takes two string parameters.
// The first string contains a bunch of random characters that may repeat multiple times
// The second string is a word.
//The function needs to determine if each letter in the word is present in the first string.
// If all the letters are present, return true, otherwise return false.

function isWordInAString(str, word){
  for(let i = 0; i < word.length; i++){
    if(str.includes(word[i])){
      str = str.replace(word[i], '')
      console.log('str', str)
    }else return false
  }
  return true

}

console.log(isWordInAString('Rcemiri', 'meRrci'))
