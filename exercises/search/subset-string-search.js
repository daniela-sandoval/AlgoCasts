// Find a subset within a longer string use binary search.

// Naive: O(n ^ 2)
function stringSearch(str, subset) {
  let count = 0
  for (let i = 0; i < str.length; i ++) {
    for (let j = 0; j < subset.length; j ++) {
      // i + j allows you to move within the longer string
      if (subset[j] !== str[i + j]) break
      // If you've reached the end of your subset, then you've found a match.
      if (j === subset.length - 1) count ++
    }
  }
  return count
}
