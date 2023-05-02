// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

// PsuedoCode:
// Write function that removes negatives from an array and replaces them with 0.
// print the array to console.log

// Code:

function remNeg(num) {
  for (i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      num[i] = 0;
    }
  }
  return num;
}

// Diagram:
// User logs function. ex console.log(remNeg([-1, 1, -2, 5]));
// Function executes, start is i=0.
// i=0, element 0 has value of -1, gets put through if statement, is -1 < than 0? true. if true, i = 0, it's true, prints 0. i++, 0+1=1, i=1.
// i=1, element 1 has a value of 1, gets put through if statement, is 1 < 0, false, 1 > 0, prints 1, i++, 1+1=2.
// i=2, element 2 has a value of -2, gets put through if statement, is -2 < 0, true, prints 0, i++, 2+1=3.
// i=3, element 3 has a value of 5, gets put through if statement, is 5 < 0, false, 5 > 0, prints 5, i++, 3+1=4.
// i=4, 4=4, Loop ends.
