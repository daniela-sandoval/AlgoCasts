// Intro to recursion: Recursive functions call themselves within the function and require a base case to keep from exceeding the callstack.

function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
