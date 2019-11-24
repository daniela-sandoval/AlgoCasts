// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// takes advantage of the first two values in the sequence
function fib(n){
  if (n <= 2) return n;
  return fib(n-1) + fib(n-2);
}


// function fib(n) {
//   arr = [0, 1]
//   function helper(input) {
//     if (input.length  === n + 1) return input
//     if (input.length === 1) {
//       input.push(1)
//     }
//     debugger
//     helper(input.push( input[input.length - 1] + input[input.length - 2] ))
//   }
//   return helper(arr)[n]
// }

module.exports = fib;
