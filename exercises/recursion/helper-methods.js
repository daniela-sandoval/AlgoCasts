// function outer(input) {
//   let outerScopedVariable = []
//
//   function helper(helperinput) {
//     helper(helperinput)
//   }
//
//   helper(input)
//
//   return outerScopedVariable
// }


// Helper Recursion
function collectOddNumbers(input) {
  let oddNums = [];

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return
    }
    if(helperInput[0] % 2 !== 0 ) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }

  helper(input)
  return oddNums
}

// Pure Recursion
function collectOddNumbers(input) {
  // this resets our array every time, but we want that
  let oddNums = [];
  // Base Case
  if(input.length === 0) {
    return oddNums;
  }
  // Logic
  if(input[0] % 2 !== 0) {
    oddNums.push(input[0])
  }

  // After it hits the base case, this will take our all single arrays and make one giant one
  oddNums = oddNums.concat(collectOddNumbers(input.slice(1)))
  return oddNums

}

// Under the Hood
// collectOddNumbers([1, 2, 3, 4, 5])
//       [1].concat(collectOddNumbers([2, 3, 4, 5]))
//                         [].concat(collectOddNumbers([3, 4, 5]))
//                                             [3].concat(collectOddNumbers([4, 5]))
//                                                               [].concat(collectOddNumbers([5]))
//                                                                               [5].concat(collectOddNumbers([])) Our base case
//                                                               [].concat([5])
//                                             [3].concat([5])
//                         [].concat([3, 5])
//         [1].concat([3, 5])
// [1, 3, 5]
