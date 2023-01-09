//count how many vowels in string

function vowels(str) {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let vow of str.toLowerCase()) {
    if (vowels.includes(vow)) {
      count++
    }
  }
  return count
}

function countOfVowels(s){
  const vow = ['a', 'o', 'e', 'i', 'u'];
  let count = 0;
  for(let i=0; i<s.length; i++){
    if(vow.includes(s[i].toLowerCase())){
      count++
    }
  }
  return count
}
///[aoeui]/gi regex searches all vowels, returns an array of vowels
// i after g-global means case-insensitive which is lower and uppercase
function findVowCount(str){
  const matched = str.match(/[aoeui]/gi) // return array of vowels case-INsensitive
  console.log('matched', matched)
  return matched ? matched.length : 0
}

console.log(findVowCount('My namAertyEe is Lena!'))



//console.log(vowels('Hi there!'))
