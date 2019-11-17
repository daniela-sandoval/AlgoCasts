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
