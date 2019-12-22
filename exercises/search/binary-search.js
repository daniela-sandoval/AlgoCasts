// Binary Search can help eliminate half of remaining elements at a time, but only works on SORTED arrays
// Picks a point in the middle and continues dividing the halves and conquering each section till its found.

function binarySearch(sortedArr, val) {
  // points to the index we start at
  let left = 0
  // points to the index at the end of array (length - 1)
  let right = sortedArr.length - 1
  // while the beginning pointer is less than the end pointer
  while (left <= right) {
    // Check the middle position for what we're looking for CURRENTLY
    let middle = Math.floor((left + right) / 2)
    if (sortedArr[middle] < val) {
      // If it's too small, move the left pointer up
      left = middle + 1 // we want to go past the middle
    } else if (sortedArr[middle] > val) {
      // If it's too big, move the right pointer down
      right = middle - 1
    } else {
      return middle
    }
  }
  // If the value isn't found, return negative one
  return - 1
}
