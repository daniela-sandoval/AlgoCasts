// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. The function should mimic the functionality Math.pow(). Don't worry about negative bases and exponents.
// power(2,0) -> 1
// power(2,2) -> 4
// power(2,4) -> 16

function power(base, exponent) {
  if (exponent === 1) return base
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

// power(2, 4)
//         return 2 * power(2, 4 - 1)
//                    return  2 * power(2, 3 - 1)
//                                return 2 * power(2, 2 - 1)
//                                           return 2
//                                return 2 * 2
//                    return 2 * 4
//         return 2 * 8
// return 16
