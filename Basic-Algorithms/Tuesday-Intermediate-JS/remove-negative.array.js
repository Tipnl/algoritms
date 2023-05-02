// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

// PsuedoCode:
// Declare a variable called x with [1,-2,4,1].
// We loop through the variable.length.
// We remove the negative numbers from the array.

// Code

let x = [1, -2, 4, 1];
let origLen = x.length;

for (let i = 0; i < origLen; i++) {
  var val = x.pop();

  if (val > 0) x.unshift(val);
}

// Diagram:
// I'm not going to lie, i had alot of trouble with this one, So eventually i took the solution from stackoverflow.
// I hope however i can explain the code.

// we first declared 2 variables, 1 array with 4 elements, and 1 where we store the value that is x.length (in this case 4.)
// we can skip the 1st variable and instead just replace origLen with x.length in the for loop.
// i = 0. 0 < 4, the value of pos 0 is 1. 1 > 0, unshift places the value to the beginning of the array. i++, i = 1.
// i = 1. 1 < 4, the value of pos 1 is -2, 0 > -2, since item was negative, item doesnt get added to array. i++, i = 2.
// i = 2. 2 < 4, value 4, 4 > 0, unshift places value at beginning of the array, i++, i=3.
// i = 3. 3 < 4, value 1, 1 > 0, unshift places value at beginning of the array, i++, i=4
// i = 4. 4 = 4, Loop ends as it no longer fits the argument.
