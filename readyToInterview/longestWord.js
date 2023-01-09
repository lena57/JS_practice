//Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed
// and return the longest word in the string.
// If there are two or more words that are the same length, return the first
// word from the string with that length.
// Ignore punctuation and assume sen will not be empty.
// Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time

// Input: "I love dogs"

// Output: love
function longestWord(sen) {
  let longest = ''
  let arr = sen.split(' ').map(el=>el.replace(/[^a-z0-9]/gi, ''))
  console.log('arr', arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i]
    }
  }
  return longest
}

function findLongest(sent){
  let longest=''
  const arrOfWords = sent.split(' ').map(el=>el.replace(/[^a-z0-9]/gi, ''))
  console.log('arrOfWords', arrOfWords)
  for(let i=0; i<arrOfWords.length; i++){
    if(arrOfWords[i].length>longest.length){
      longest = arrOfWords[i]
    }
  }
  return longest
}
console.log(findLongest('I@#$ l()ove&* do{]gs!'))
