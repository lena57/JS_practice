//anagrama is a word that consists off the same letters as other word
//example: 'friend' and 'finder'

function anagrama(w1, w2) {
  const arr1 = w1.toLowerCase().split('')
  const arr2 = w2.toLowerCase().split('')
  for (let i=0; i<arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr2.splice(arr2.indexOf(arr1[i]), 1)
      arr1.splice(arr1.indexOf(arr1[i]), 1)
      i--
    }
  }
  return (arr2.length === 0 && arr1.length === 0)
}

//sec version
function anag(w1, w2){
  w1 = w1.toLowerCase().replace(/[^\w]/g, '')
  console.log('w1', w1)
  w2 = w2.toLowerCase().replace(/[^\w]/g, '')
  console.log('w2', w2)
  const obj1={}
  const obj2={}
  for (let el of w1){
    obj1[el] = 1+obj1[el] || 1
  }
  for (let el of w2){
    obj2[el] =  obj2[el]+1 || 1
  }
  // console.log('obj1', obj1)
  // console.log('obj2', obj2)
  if(Object.keys(obj1).length !== Object.keys(obj2).length){
    return false
  }
  for (let el in obj1) {
    if(obj1[el] !== obj2[el]){
      return false
    }
  }
  return true
}


console.log(anag('*fr._#ien,d_', '_fin&^_de^)))r'))
