//it's not recommended to change the original object in function's body
//recommended to create a copy oj the object and then to change the object


const person = {
  name: 'Bob',
  age: 23,
}
function increaseAge(anyPerson){
  const newPerson = Object.assign({}, anyPerson);
  newPerson.age++
  return newPerson
}

const updatedPerson = increaseAge(person)
console.log('updatedPerson', updatedPerson.age)
console.log('person', person.age)

// function aa(){
//   a=9
//   console.log(a)
// }
// aa()
// console.log(a)
