// given number N, return the smallest number with the same number
// of digits as N. if N=1 return 0, if N=125 return 100

function solution(N) {
  let res = ''
  let num = N.toString()
  if (num.length === 1) {
    return 0
  }
  for (let i = 0; i < num.length; i++) {
    if (num[i] === '0') {
      res += '1'
    } else {
      res += '0'
    }
  }
  return parseInt(res)
}

console.log(solution(125))

