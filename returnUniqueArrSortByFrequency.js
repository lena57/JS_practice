//given array of fruits, return sorted by frequency array with unique elements

let array =
  ['banana', 'orange', 'grape', 'grape', 'orange',
    'grape', 'banana', 'banana', "banana", 'orange',
    'orange', 'orange']

//result ['banana', 'grape', 'orange'] because banana is 4 times in array

function sortedAndUnique(array) {
  let obj = {};
  for (let el of array) {
    if (obj[el] === undefined) {
      obj[el] = 1
    } else obj[el]++
  }
  let values = Object.values(obj) //[4, 2, 3]
  let keys = Object.keys(obj) // ['banana', 'orange', 'grape']
  let minKey = ''
  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] < values[j]) {
        minKey = keys[i]
        keys[i] = keys[j]
        keys[j] = minKey
      }
    }

  }
  return keys
}

console.log(sortedAndUnique(array))
