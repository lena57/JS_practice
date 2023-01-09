const myPromise = new Promise((resolve, reject) => {
  //asynchronous actions, resolve or reject functions must be called
})
// how to receive a result of promise
myPromise
  .then(value => {
    //value is value that was given to resolve function inside promise
    console.log(value)
  })
  .catch(err => {
    //err is value that was given to reject function inside promise
    console.log(err)
  })

// can you create promise like this

const getData = (url) => new Promise((resolve, reject) => {
  //asynchronous actions, resolve or reject functions must be called
  fetch(url)
    .then(res => res.json())
    .then(json => resolve(json))
    .catch(err => reject(err))
})

getData("https://jsonplaceholder.typicode.com/todos/8")
  .then(data => console.log(data))//data here is json parameter for resolve function(line 21)
  .catch(err => console.log(err.message)) // err here is err parameter for reject function
