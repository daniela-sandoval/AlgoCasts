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
