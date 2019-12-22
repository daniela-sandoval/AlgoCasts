// Implement simple linear search
// O (N)
function linearSearch(arr, val) {
  for(let i = 0; i < arr.length; i ++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}
