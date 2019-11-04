// Write a function that checks if the values in the first array, are the same squared version in the second array. Must account for the frequency included in the first array.

// "NAVIE" approach: O(n^2)
  function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false
    }
    // first loop
    for(let i = 0; i < arr1.length; i++) {
      // second loop within the first loop => #indexOf
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      if (correctIndex === -1) {
        return false
      }
      arr2.splice(correctIndex, 1)
    }
    return true
  }


// More optimal approach: O(n) uses counters
  function sameCounter(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // Three seperate loops
    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key of frequencyCounter1) {
      if(!(key ** 2 frequencyCounter2)) {
        return false
      }
      if (frequencyCounter2[key ** 2 ] !== frequencyCounter1[key]) {
        return false
      }
    }
    return true
  }
