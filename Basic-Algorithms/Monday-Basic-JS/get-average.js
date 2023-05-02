// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

// PsuedoCode.
// Write function that will return the average value of any given input. this means if we have an input of 5, divide this by the outcome. ex 1 1 1 1 1, 5/5=1.
// Print this value to the console.

// Code:

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

console.log(average([1, 1, 1, 1, 1]));

// Diagram
// User puts in an array of [1, 1, 1, 1, 1].
// i = 0, i[0] = 1, 0+1=1, at this point we have a sum of 1. i++ 0+1=1.
// i = 1, i[1] = 1, sum = 1, 1+1 = 2, i++, 1+1=2.
// i = 2, i[2] = 1, sum = 2, 2+1=3, i++ 2+1=3.
// i = 3, i[3] = 1, sum = 3, 3+1=4, i++ 3+1=4.
// i = 4, i[4] = 1, sum = 4, 4+1=5, i++ 4+1=5.
// i = 5, i[5] = undefined, sum = 5, i=5 = 5, Loop ends.
// returns the sum and divides it by the length of the array, the array length is 5, the sum is 5, 5/5=1.
