// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the max. sum of n consecutive elements in the array.
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) -> 10

// Colt's Solution: O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  // Edge case
  if (arr.length < num) return null;
  // First window
  for(let i = 0; i < num; i ++) {
    maxSum += arr[i];
  }
  tempSum = maxSum
  // Loop that will shift the window
  for(let i = num; i < arr.length; i++) {
    // takes out the first element arr[i - num] in the window and it adds the new element arr[i]
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// Naive Solution: O(N^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max
}

// My Attempts...
function maxSubarraySum(arr, num) {
  let max = []
  let left = 0
  for(let right = num; right < arr.length; right ++) {
    let slidingWindow = arr.slice(left, right)
    let currentMax = 0
    for(let number of slidingWindow) {
      currentMax += number
    }
    max.push(currentMax)
  }
  return max[max.length -1]
}

function maxSubarraySum(arr, num) {
  let max = []
  let left = 0
  for(let right = num; right < arr.length; right ++) {
    let currentMax = arr[num] + slidingWindow[num + 1]
    if(currentMax > max) {
      let max = currentMax
    } else {
      begining ++
      end ++
    }
  }
  return max
}
