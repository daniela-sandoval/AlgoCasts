// Recursive
function factorial(num) {
  if(num <= 0) return 1;
  return num * factorial(num - 1)
}

// factorial(3) 3!
//     return 3 * factorial(2)
//                   return 2 * factorial(1)
//                                    return 1
//                   return 2 * 1
//     return 3 * 2
// 6


// Iterative
function factorial(num) {
  let answer = 1
  for(let i = num; i > 1; i --) {
    answer *= i
  }
  return answer
}
