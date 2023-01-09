// 1 means a wall, 0 means a free space, check the path from start to end
const maze = [
  [1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0]
]
console.log('maze', maze)
const checkPath = (start, end) => {
  //we want to mark our steps, so we will put 5 instead 0
  maze[start.y][start.x] = 5; // the very first cell-start point
  let siblings = getValidSiblings(start)
  console.log('siblings', siblings)

  if (siblings.length > 0) {
    for (let i = 0; i < siblings.length; i++) {
      let current = siblings[i]
      let isSolved = current.x === end.x && current.y === end.y
      let notVisited = maze[current.y][current.x] !== 5
      if (isSolved || (notVisited && checkPath(current, end))) {
        return true
      }
    }
  }

  return false
}

function getValidSiblings(coordinates) {
  let {x, y} = coordinates
  console.log('x, y', x, y)
  let arrOfCoord = []

  if (maze[y - 1] !== undefined) {
    arrOfCoord.push({x: x, y: y - 1, value: maze[y - 1][x]})
  }
  if (maze[y + 1] !== undefined) {
    arrOfCoord.push({x: x, y: y + 1, value: maze[y + 1][x]})
  }
  if (maze[y][x - 1] !== undefined) {
    arrOfCoord.push({x: x - 1, y: y, value: maze[y][x - 1]})
  }
  if (maze[y][x + 1] !== undefined) {
    arrOfCoord.push({x: x + 1, y: y, value: maze[y][x + 1]})
  }

  console.log('arrOfCoord', arrOfCoord)
  return arrOfCoord.filter(el => el.value === 0)

}

console.log(checkPath({x: 3, y: 0}, {x: 5, y: 5}))
console.log('maze', maze)
