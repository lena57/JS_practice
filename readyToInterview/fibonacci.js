//return n's element of fibonacci's sequence

function fib(n) {
  let num1 = 1 //number 1 is on position 1
  let num2 = 1 //next number 1 is on position 2
  for (let i = 3; i <= n; i++) { //starting with position 3
    [num1, num2] = [num2, num1 + num2]
    console.log(num2)
  }
  return num2
}

console.log(fib(6))
