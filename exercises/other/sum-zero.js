// Multiple Pointer Pattern
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both that sum to zero or undefined if a pair does not exist.
// sumZero([-3, -2, -1, 0, 1, 2, ,3]) -> [-3, 3]
// sumZero([-2, 0, 1 ,3]) -> undefined
// sumZero([1, 2, 3]) -> undefined

// Naive Solution: O(n ^ 2), Space: O(1)
function sumzero(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1+ 1; j < arr.length; j ++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// Refactored: O(n), Space: O(1)
// Only works because it relies on the fact that the array is SORTED before hand so the smallest will be on the left, while the larger values on the right
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if ( sum > 0) {
      right --;
    } else {
      left ++;
    }
  }
}
