const timerPromise = () => { //return a promise
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 2000))
}


const asyncFn = async () => {
  console.log('start')
  const startTime = performance.now() //set time
  await timerPromise() //if function returns a promise put await keyword
  const endTime = performance.now()
  console.log('end', endTime - startTime)
}
asyncFn()
//rewrite function getData using async/await
//const getData = (url) => new Promise((resolve, reject) => {
//   //asynchronous actions, resolve or reject functions must be called
//   fetch(url)
//     .then(res => res.json())
//     .then(json => resolve(json))
//     .catch(err => reject(err))
// })
//
// getData("https://jsonplaceholder.typicode.com/todos/8")
//   .then(data => console.log(data))//data here is json parameter for resolve function
//   .catch(err => console.log(err.message)) // err here is err parameter for reject function
const getData = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}
const url = "https://jsonplaceholder.typicode.com/todos/7"
const data = async (url) => await getData(url)

try {
  data(url)
    .then(r => console.log(r))
  //console.log(data)
} catch (err) {
  console.log(err.message)
}

