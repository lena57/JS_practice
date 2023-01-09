//A string S made of uppercase English letters is given. In one move,
// six letter forming word 'BANANA' (one 'B', three 'A', and two 'N')
// can be deleted from S.
// What is the maximum number times such a
// move can be applied to S? Write a function that, given a string S of
// length N, returns the maximum number of moves that can be applied to S.

function solution(S) {
  let count = 0
  let map = {}
  for (let i = 0; i < S.length; i++) {
    if (map[S[i]] === undefined) {
      map[S[i]] = 1
    } else {
      map[S[i]]++
    }
  }
  console.log('map', map)
  while (map['B'] >= 1 && map['A'] >= 3 && map['N'] >= 2) {
    map['B'] -= 1
    map['A'] -= 3
    map['N'] -= 2
    count++
    console.log('map', map)
  }
  return count
}


function countOfMove(str) {
  const obj = {};
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1
    } else obj[str[i]]++
  }
  console.log('obj', obj)

  while (obj['A'] >= 3 && obj['B'] >= 1 && obj['N'] >= 2) {
    obj['A'] -= 3
    obj['B'] -= 1
    obj['N'] -= 2
    count++
    console.log('obj', obj)
  }
  return count
}

console.log(countOfMove('DBSNDISMAANAA'))


//console.log(solution('NAANAAXNABABYNNBZ'))



