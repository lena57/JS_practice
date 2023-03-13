//Input:
// array: [11, 5, 6, 7, 2, 4, 6, -3, -2, 1]
// Expected Output:
// [-3, -2, 1, 2, 4, 5, 6, 6, 7, 11]

const solution = (array) => {
  function merge(left, right) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }

    return merged.concat(left.slice(i)).concat(right.slice(j));
  }

  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }

    let middleIndex = Math.floor(array.length / 2);

    let left = array.slice(0, middleIndex);
    let right = array.slice(middleIndex, array.length);

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);
  }

  return mergeSort(array);
};
  console.log(solution([11, 5, 6, 7, 2, 4, 6, -3, -2, 1]));
