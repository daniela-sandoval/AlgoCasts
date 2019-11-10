// Given a sorted array of integers, write a function called serach, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1. (Binary search)

// search([1, 2, 3, 4, 5, 6], 4) -> 3
// search([1, 2, 3, 4, 5, 6], 11) -> -1



// Binary Search: Log(n)
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1; //last index
  while (min <= max) {
    let middle = Math.floor((min + max) / 2); //middle index
    let currentElement = arr[middle];

    if (currentElement < val ) {
      min = middle + 1 //move index towards the second half
    } else if (currentElement > val) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

// Naive Solution: O(N)
function search(arr, num) {
  for(let i = 0; i < arr.length; i ++) {
    if (num === arr[i]) {
      return i
    }
  }
  return -1
}
