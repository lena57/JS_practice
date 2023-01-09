const table={
  users: [
    {
      id: 1,
      name: 'John',
      age: 20,
    },
    {
      id: 2,
      name: 'Nick',
      age: 20,
    },
    {
      id: 1,
      name: 'Vasya',
      age: 20,
    }
  ]
}
const jsxUsers = users.results.map((user) => {
  <tr>
    {Object.values(user).map((el) => <td>{el}</td>) }
  </tr>
});
