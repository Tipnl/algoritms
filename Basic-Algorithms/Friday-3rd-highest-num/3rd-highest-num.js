// Having an array of numbers,
// write an algorithm that will return the 3rd highest number in the array.
// Your algorithm should do only one iteration of the array (just one for/while loop).

// PsuedoCode:
// Make an array that takes in the numbers [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31].
// Write a function that takes in said array.
// declare var for first highest value, 2nd and 3rd.
// if statement comparing them

// Code:

function thirdHigh(x) {
  let val1 = 0;
  let val2 = 0;
  let val3 = 0;
  for (let i = 0; 0 < x.length; i++) {
    if (x[i] > val1) {
      val3 = val2;
      val2 = val1;
      val1 = x[i];
    } else if (x[i] > val2) {
      val3 = val2;
      val2 = x[i];
    } else if (x[i] > val3) {
      val3 = x[i];
    }
  }
  return val3;
}
