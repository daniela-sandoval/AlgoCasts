// Write a recursive function called reverse which accepts string and returns new string in reverse.
// reverse('awesome') -> 'emosewa'
// reverse('rithmschool') -> 'loohcsmhtir'


// My solution
function reverse(str) {
  let result = []
  function helper(input) {
    if(input.length === 0) return
    result.push(input[input.length - 1])
    input.pop()
    helper(input)
  }
  helper(str.split(""))
  return result.join("")
}

// Colt's
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
