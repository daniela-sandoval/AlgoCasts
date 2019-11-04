// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Using frequency counter method
function anagrams(stringA, stringB) {
  if(stringA.length !== stringB.length) {
    return false
  }
  // establish counters
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  // loop through to make counter one
  for(let letter of stringA) {
    // instead of an if statement block...
    if(/[a-z]/.test(letter)) {
      let char = letter.toLowerCase()
      frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
  }
  // loop through to make counter two
  for(let letter of stringB) {
    // instead of an if statement block...
    if(/[a-z]/.test(letter)) {
      let char = letter.toLowerCase()
      frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  // check to see if all letters from stringA counter were used in stringB counter
  for(let key of Object.keys(frequencyCounter1)) {
    // 1. compare the keys between counters
    if(!frequencyCounter2[key]) {
      return false
    }
    // 2. compare the value of the keys (frequency)
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false
    }

  }
  // Return true if it was found as a key in our counters AND it had the same frequency
  return true
}

module.exports = anagrams;
