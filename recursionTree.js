//given an object tree, collect all values into the array

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {value: 3},
      ]
    },
    {
      value: 4,
      children: [
        {value: 5},
        {value: 6},
      ]
    },
  ]
}
//using recursion return the sum of all values

function sumOfValues(tree){
  let sum = 0;
  if(tree.value){
    sum = tree.value;
  }
  if(tree.children){
    for(let i = 0; i<tree.children.length; i++){
      sum+=sumOfValues(tree.children[i])
    }
  }
  return sum
}

console.log(sumOfValues(tree))

//using recursion return [1, 2, 3, 4, 5, 6]

// function collectValues(tree){
//   let res = []
//   res.push(tree.value)
//   if(tree.children){
//     for(let i = 0; i < tree.children.length; i++){
//       res = res.concat(collectValues(tree.children[i]))
//     }
//   }
//   return res
// }

function collectValues(tree) {
  let res = [];
  res.push(tree.value);
  if (tree.children) {
    let array = []
    for (let i = 0; i < tree.children.length; i++) {
      array = collectValues(tree.children[i])
      res.push(...array)
    }
  }
  return res
}

//console.log(collectValues(tree))


//implement the function that will summarize the numbers and log them
//example  sum(5)(4)(11)
// result log:
// 5
// 9
// 20

function sum(n) {
  console.log(n)
  return function (a) {
    return sum(a + n)
  }
}
//sum(5)(4)(11)(20)
