// Write a function alled RecursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.
// recursiveRange(6) -> 21
// recursiveRange(10) -> 55

function recursiveRange(num) {
  if(num <= 0) return 0
  return num + recursiveRange(num - 1)
}

// recursiveRange(4)
//       return 4 + recursiveRange(4 - 1)
//             return 3 + recursiveRange(3 - 1)
//                   return 2 + recursiveRange(2 - 1)
//                         return 1 + recursiveRange(1 - 1)
//                               return 0
//                         return 1 + 0
//                   return 2 + 1
//             return 3 + 3
//       return 4 + 6
// 10
