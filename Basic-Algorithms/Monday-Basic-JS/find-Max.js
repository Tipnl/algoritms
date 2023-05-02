// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

// PsuedoCode:
// Make a Function that takes values and prints the highest Number of said values.
// Function needs to also work with negative values and 0.

// Code:
function max(array) {
  let val = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > val) val = array[i];
  }

  console.log(val);
}

// Diagram:
// User calls function with arguments. ex. [-10, 5, 10, 2, 39].
// let val has an array with an element of 0.
// i = 1, array = -10, -10 does not > 0, val = 0, i++, 1+1=2.
// i = 2, array = 5, 5 > 0, val = 5, i++, 2+1=3.
// i = 3, array = 10, 10 > 5, val = 10, i++, 3+1=4.
// i = 4, array = 2, 2 does not > 10, i++, 4+1=5.
// i = 5, array = 39, 39 > 10, i++, 5+1=6.
// i = 6. array.length = 5, 6 does not > 5, Loop ends.
