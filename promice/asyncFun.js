const asyncFun = async () => {
  return 'Success!'
}
asyncFun()
  .then(value=>console.log(value))


const asyncFn = async ()=>{
  throw new Error('some error here!')
}
asyncFn()
.then(res=>console.log(res) )
.catch(err=>console.log(err.message))
