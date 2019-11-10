// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
// areThereDuplicates(1, 2, 3) -> false
// areThereDuplicates(1, 2, 2) -> true
// areThereDuplicates('a', 'b', 'c', 'a') -> true



// frequency counter: O(n)
function areThereDuplicates() {
  let frequencyCounter = {};
  for(let arg in arguments) {
    frequencyCounter[arguments[arg]] = (frequencyCounter[arguments[arg]]|| 0) + 1
  }
  for(let keys in frequencyCounter) {
    if(frequencyCounter[keys] > 1) {
      return true
    }
  }
  return false
}

// multiple pointers
function areThereDuplicates() {
  let sortedArr = Array.from(arguments).sort()
  let i = 0
  let j = 1
  while (j < sortedArr.length) {
    if(sortedArr[i] === sortedArr[j]) {
      return true
    } else {
      i++
      j++
    }
  }
  return false
}

// one liner....
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length
}
