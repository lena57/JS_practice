//implement the function that has two parameters: array and callback function
// according to the result of callback the elements from array will be grouped
// function should return an object with groups and theirs elements what belong
// to these groups ac cording to the callback result
// example:
const arrOfEl = [4.5, 7.1, 4.3, 7.9];
//const callback = Math.floor();

// result {
//   '4': [4.5, 4.3],
//   '7': [7.1, 7.9]
// }

function groupTheElementsByCallback(arrOfEl, callback){
  let res = {};
  arrOfEl.forEach(el=> {
    let resAfterCallback = callback(el);
    if(res[resAfterCallback]){
      res[resAfterCallback].push(el)
    }else{
      res[resAfterCallback]=[el]
    }

  })
  return res
}

console.log(groupTheElementsByCallback(arrOfEl, Math.floor))
