// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// productOfArray([1, 2, 3]) -> 6
// productOfArray([1, 2, 3, 10]) -> 60

function productOfArray(arr) {
  if(arr.length === 1) return arr[0]
  if(arr.length === 0) return 0
  return arr[0] * productOfArray(arr.slice(1))
}


// productOfArray([1, 2, 3])
//       return 1 * productOfArray([2, 3])
//                   return 2 * productOfArray([3])
//                               return 3 * product([])
//                               return 3
//                   return 2 * 3
//       return 1 * 6
// 6
