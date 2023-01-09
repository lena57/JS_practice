class SumArray extends Array {
  //create sumOfArray method THAT WILL RETURN SUM OF ALL ELEMENTS OF ARRAY

  sum() {
    return this.reduce((acc, elem) => typeof elem === 'number' ?
       acc+=elem : acc, 0);

  }

}

const arr = new SumArray(10, 'l', 2, 3, 'pop', 9);
console.log('arr', arr)
console.log(arr.sum())
