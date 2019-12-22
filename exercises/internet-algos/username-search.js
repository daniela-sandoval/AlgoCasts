// Implement a search where you have a given list of usernames it checks to see if a given input is in our username list.


// Linear Search moves one item at a time checking every single element through a collection
// Methods: Includes, IndexOf
// Regular
function username(arr, val) {
  if (val === undefined || val.length === 0)  {
    return "Please enter a name..."
  }
  if (arr.indexOf(val) === -1) {
    return `${val} is a unique username!`
  } else {
    return `${val} is already been taken, try again!`
  }
}
