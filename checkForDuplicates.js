//check if there are duplicates in array and return an  array of those duplicates

// function checkForDuplicates(arr){
//     let duplicates=[]
//   for(let i=0; i<arr.length; i++){
//     let current = arr[i]
//     let rest = arr.slice(i+1)
//     if(rest.indexOf(current)!==-1) {
//       duplicates.push(current)
//     }
//
//   }
//   return duplicates
// }

function findDuplicates(array) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    let arr = array.splice(i+1)
    let duplicates = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el))
    res.push(...duplicates)
  }
  return res
}

console.log(findDuplicates([7, 7, 3, 7, 0, 9, 8, 7, 6, -1, 2, 9]))
