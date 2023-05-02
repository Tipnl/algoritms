// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

// PsuedoCode:
// 1- Loop Through Array X.
// 2- Print Elements in Array X. make sure to print everything and make sure that it works with arrays of all sizes.

// Code:
//var X = [1, 4, 2, 12];

for (i = 0; i < X.length; i++) {
  console.log(X[i]);
}

// Diagram:
// i = 0, this is because Arrays start with 0. Array X has 4 items, We can both see that as we can count the Elements, but to save us time if the array is longer we use .length.
// i = 0, 0 < 4 (4 is length of Array), Prints 1, i becomes 1 as 0+1=1.
// i = 1, 1 < 4, Prints 4, i becomes 2 as 1+1=2.
// i = 2, 2 < 4, Prints 2, i becomes 3 as 2+1=3.
// i = 3, 3 < 4, Prints 12, i becomes 4 as 3+1=4.
// i = 4, 4 = 4, Stops loop as 4 is not > than 4 but = 4 instead, therefor condition is false.

// But we are not allowed to use Arrays.

// So we use a function with Rest Parameters.

// PsuedoCode:
// 1- Build a function that uses Rest Parameters.
// 2- Print those numbers in console log.

function printArr(...args) {
  console.log(args);
}

// Diagram:
// 1- User calls to function printArr. ex printArr(1, 2, 3).
// 2- printArr() function prints said numbers to an array.
// 3- In Assignment numbers 1,4,2,12 were said to be printed to console.
// 4- printArr(1, 4, 2, 12);
// 5- printArr() console.logs [1, 4, 2, 12].
