//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Psuedocode:
// Create a function, lets call it LargestNum.
// Declare a var called 'result' which is an empty array.
// Loop through the 4 different arrays with .length
// Push the result into result.
// Print result to the console.

// Code:
function largestFour(array) {
  let largestArray = [];
  for (let i = 0; i < array.length; i++) {
    let largestNum = array[i][0];
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] > largestNum) {
        largestNum = array[i][j];
      }
    }
    largestArray.push(largestNum);
  }
  return largestArray;
}
