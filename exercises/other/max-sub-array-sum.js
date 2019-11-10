// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the max. sum of n consecutive elements in the array.
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
