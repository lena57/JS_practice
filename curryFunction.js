//Please implement a curry() function, which accepts a function and return a curried one.
// Here is an example
//
//
// curriedJoin(1, 2, 3) // '1_2_3'
//
// curriedJoin(1)(2, 3) // '1_2_3'
//
// curriedJoin(1, 2)(3) // '1_2_3'
// /**
//  * @param { (...args: any[]) => any } fn
//  * @returns { (...args: any[]) => any }
//  */
const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}
 const curriedJoin = curry(join)

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

console.log(curriedJoin(1, 2, 3))

