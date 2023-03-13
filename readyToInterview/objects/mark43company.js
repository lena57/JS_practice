// Carburetor Springs Police Department is looking to improve their response
// times to traffic collisions by setting up cameras at the intersection
// with the most traffic collisions.
// Carburetor Springs Police Department decided to hire you to help them
// determine which intersection has the most traffic collision events.
// You have been provided with a dataset consisting of history of events
// collected from the police department's records management system.

// Explanation of the Input:
//     An event consists of 3 fields: {street1, street2, numVehiclesInvolved}

// Which will be provided to you in way that works for whatever language you pick.
//     Example: {"Greenwich", "Spring", 1},
//          or: { street1: "Greenwich", street2: "Spring", numVehiclesInvolved: 1 },

// Consider the following example.

// Input:
// [
//     { street1: "Hudson", street2: "Canal", numVehiclesInvolved: 3 },
//     { street1: "6th", street2: "Canal", numVehiclesInvolved: 4 },
//     { street1: "6th", street2: "Canal", numVehiclesInvolved: 2 },
//     { street1: "Hudson", street2: "Canal", numVehiclesInvolved: 2 },
//     { street1: "Hudson", street2: "Canal", numVehiclesInvolved: 3 },
//     { street1: "Hudson", street2: "Dominick", numVehiclesInvolved: 2 },
//     { street1: "Greenwich", street2: "Spring", numVehiclesInvolved: 1 },
//     { street1: "Greenwich", street2: "Spring", numVehiclesInvolved: 0 },
// ]

// Output: "Hudson & Canal"

// In this example, the intersection, "Hudson & Canal" has the most traffic collisions and is therefore the most traffic-collision-prone intersection.

// Let’s talk about your plan of attack before you start coding, and remember
// to keep talking me through what you are doing as you code.
// Don't forget to consider any possible edge cases.

const arr = [
  {street1: "Hudson", street2: "Canal", numVehiclesInvolved: 3},
  {street1: "6th", street2: "Canal", numVehiclesInvolved: 4},
  {street1: "6th", street2: "Canal", numVehiclesInvolved: 2},
  {street1: "Hudson", street2: "Canal", numVehiclesInvolved: 2},
  {street1: "Hudson", street2: "Canal", numVehiclesInvolved: 3},
  {street1: "Hudson", street2: "Dominick", numVehiclesInvolved: 2},
  {street1: "Greenwich", street2: "Spring", numVehiclesInvolved: 1},
  {street1: "Greenwich", street2: "Spring", numVehiclesInvolved: 0},
]

function defineIntersectionCollision(arr) {
  const resObj = {}
  for (let i = 0; i < arr.length; i++) {
    let intersection = `${arr[i].street1} & ${arr[i].street2}`;
    if (!resObj[intersection]) {
      resObj[intersection] = {count: 1, numVehiclesInvolved: arr[i].numVehiclesInvolved}
    } else {
      resObj[intersection].count += 1;
      resObj[intersection].numVehiclesInvolved += arr[i].numVehiclesInvolved
    }
  }
  console.log(resObj)
  let maxCollision = 0
  let maxVehicles = 0
  let maxIntersection = ''
  for (let intersection in resObj) {
    if (resObj[intersection].count > maxCollision) {
      maxCollision = resObj[intersection].count
      maxVehicles = resObj[intersection].numVehiclesInvolved
      maxIntersection = intersection
    } else if (resObj[intersection].count === maxCollision) {
      maxVehicles = Math.max(resObj[intersection].numVehiclesInvolved, maxVehicles)
    }

  }
  return {intersection: maxIntersection, numVehiclesInvolved: maxVehicles}
}

console.log(defineIntersectionCollision(arr))

