function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num - 1)
}

// Under The Hood
// sumRange(3)
//   return 3 + sumRange(2)
//                 return 2 + sumRange(1)
//                               return 1  ** our basecase stops the stack and we can finally start previous functions
//                 return 2 + 1
//   return 3 + 3
// 6


function goingDown(num) {
  if(num === 1) return console.log("Made it to the first floor!");
  console.log(`We're on floor ${num}, going down.`)
  return goingDown(num - 1)
}

// Under the Hood
// goingDown(4)
//       return goingDown(4 - 1)
//             return goingDown(3 - 1)
//                   return goingDown(2 - 1)
//
//                   1 our base case
//             2
//       3
// 4
