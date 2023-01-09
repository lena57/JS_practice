//function takes num as number, if num is multiple of 3 return fizz,
// if num is multiple of 5 return buzz. If num is multiple of 15 return fizzBuzz,
// all other numbers return as is

function fizzBuzz(num){
  if(isNaN(num)) return 'num is not a num';
  for (let i = 1; i<= num; i++){
    if(i%5===0 && i%3===0){
      console.log('fizzBuzz')
    }
    if(i%3===0){
      console.log('fizz')
    }
    if(i%5===0){
      console.log('buzz')
    }else console.log(i)
  }

}

console.log(fizzBuzz('19'))
