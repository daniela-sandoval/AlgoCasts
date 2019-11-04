// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Broken down steps for solution
// 1. Establish counters
// 2. Loop through first array to make the first counter
//   a. Instead of an IF statement block, use shorthand/ternary
//   b. Consider where you want to convert to lowercase and test for ALPHABETICAL values
// 3. Repeat the same step for the second array and second counter
// 4. Create final loop that will check to see if letters from the FIRST input are in the second based on TWO conditions
//   a. Whether or not the key/letter exists in the second string
//   b. Making sure the frequency of that letter (once it does exist) is the same in both strings
// 5. If the all letters pass the test, return true that it is a valid anagram.
// FUTURE WORRIES: Making this dry by having to lowercase twice


function anagrams(stringA, stringB) {
  // if(stringA.length !== stringB.length) {
  //   return false
  // }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let letter of stringA) {
    if(/[a-z]/.test(letter)) {
      let char = letter.toLowerCase()
      frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
  }
  for(let letter of stringB) {
    if(/[a-z]/.test(letter)) {
      let char = letter.toLowerCase()
      frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
  }
  for(let key of Object.keys(frequencyCounter1)) {
    if(!frequencyCounter2[key]) {
      return false
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false
    }
  }
  return true
}

// Using frequency counter method: O(n)
  // function anagrams(stringA, stringB) {
  //   if(stringA.length !== stringB.length) {
  //     return false
  //   }
  //   // establish counters
  //   let frequencyCounter1 = {}
  //   let frequencyCounter2 = {}
  //   // loop through to make counter one
  //   for(let letter of stringA) {
  //     // instead of an if statement block...
  //     if(/[a-z]/.test(letter)) {
  //       let char = letter.toLowerCase()
  //       frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  //     }
  //   }
  //   // loop through to make counter two
  //   for(let letter of stringB) {
  //     // instead of an if statement block...
  //     if(/[a-z]/.test(letter)) {
  //       let char = letter.toLowerCase()
  //       frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  //     }
  //   }
  //   // check to see if all letters from stringA counter were used in stringB counter
  //   for(let key of Object.keys(frequencyCounter1)) {
  //     // 1. compare the keys between counters
  //     if(!frequencyCounter2[key]) {
  //       return false
  //     }
  //     // 2. compare the value of the keys (frequency)
  //     if (frequencyCounter1[key] !== frequencyCounter2[key]) {
  //       return false
  //     }
  //
  //   }
  //   // Return true if it was found as a key in our counters AND it had the same frequency
  //   console.log(frequencyCounter1)
  //   console.log(frequencyCounter2)
  //   return true
  // }



module.exports = anagrams;
