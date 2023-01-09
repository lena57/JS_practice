const input=[
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 25000]
]
//
// const output = {
//   usd: [10000, 30000],
//   gbp: [9000, 0],
//   eur: [0, 7000],
//   uah: [10000, 0],
// }

function currencyFn(input){
  const res={}
  input.forEach(el=>{
    const [currency, type, amount] = el; // destructure
    if(!res[currency]){ // check if the object res has a particular property
      //if the object doesn't have it, so it will be assigned with value [0, 0]
      res[currency] = [0, 0]
    }
    // if the object has the particular property so the amount of money will be added to
    // one of the element of the array depending on the type of the operation 'buy'-first
    // element of array oe 'sell' - second element of the array
    res[currency][type==='buy' ? 0 : 1] += amount // if
  })
    return res
}

console.log(currencyFn(input))
