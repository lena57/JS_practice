//// you are given a binary tree represented as an array for example:
// [3, 6, 2, 9, -1, 10] where -1 is a non-existing node.
//write a function that determines whether the left or right branch
// of the tree is larger. The size of each branch is the sum of the node values.
//if the tree has 0 nodes return 0.
// if the tree has 1 node return the value of that node.
//if the size of the branches are equal return the empty string

const solution = (arr) => {
  let left=0;
  let right=0;
  let level=1;
  let node=Math.pow(2, level)
  let nodeCount=0
  if(arr.length===0){
    return ''
  }
  for(let i=1; i<arr.length; i++){
    if(node===nodeCount){
      level++
      nodeCount=0
    }
    node = Math.pow(2, level)
    if(arr[i]!==-1){
      if(nodeCount<node/2){
        left+=arr[i]
      }else{
        right+=arr[i]
      }
    }
    nodeCount++
  }
  return left>right ? 'Left' : right>left ? 'Right' : ''
};

console.log(solution([3, 6, 2, 9, -1, 10]))
