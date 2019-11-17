// Intro to recursion: Recursive functions call themselves within the function and require a base case to keep from exceeding the callstack.

// Recursive
function countDown(num) {
  // Base case
  if (num <= 0) {
    console.log("All done!");
    // you need return in order to prevent the code below from running
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// Non-recursive
function countDown(num) {
  for(let i = num; i > 0; i--) {
    console.log(i)
  }
  console.log("All Done!");
}
