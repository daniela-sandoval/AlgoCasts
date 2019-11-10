// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. (Multiple Pointer)

// countUniqueValues([1, 1, 1, 1, 2]) -> 2
// countUniqueValues([-2, -1, 0, 1, 2]) -> 5
// countUniqueValues([]) -> 0


function countUniqueValues(arr) {
  let pointA = 0
  let pointB = 1
  while (pointB < arr.length) {
    // Pointer B should move forward and compare constantly with point A
    if(arr[pointA] === arr[pointB]) {
      pointB ++
    } else {
      // If they aren't the same, move point A forward and arrange the arr by creating your own unqiue array. Make sure to move point B forward
      pointA ++
      arr[pointA] = arr[pointB]
      pointB ++
    }
  }
  if(pointA === 0) {
    return pointA
  } else {
    return pointA + 1
  }
}


// Using Set method from ES6 based on same algorithm
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function countUniqueValue(arr) {
  let uniqueSet = Array.from(new Set(arr))
  if (uniqueSet.length > 0) {
    return uniqueSet.length
  } else {
    return 0
  }
}

// Colt's Solution: Only one pointer defined while the other is WITHIN the loop
function countUniqueValues(arr) {
  if (arr.length == 0 ) {
    return 0
  }
  let i = 0;
  for(let j = 1; j < arr.length; j ++) {
    if(arr[i]!== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
