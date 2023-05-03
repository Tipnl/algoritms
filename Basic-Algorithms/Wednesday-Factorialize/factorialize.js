// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

// PsuedoCode.
// So, math isnt my strong side, so i had to google this one.
// I think i understand just enough to explain it.
// From what i can see is that it takes the number and multiplies it by that.
// I have some trouble visualizing but, i understand enough.

// Write function that takes n as parameter.
// Function needs to output 0 as 1 and 1 as 1, if statement.
// Function needs to multiply numbers through loop, so 5! = 1*2*3*4*5 = 120
// Loop needs to decrement, as we are counting down from 5.

// Code:

function factorialize(n) {
  if (n === 0 || n === 1) return 1;
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}
factorialize(5);

// Diagram:
// User calls function with 5.
// i=4, as i = n - 1, = 4. 4 >= 1, 5*4=20, i--, i=3.
// i=3, 3 >= 1, 20*3=60, i--, i=2.
// i=2, 2 >= 1, 60*2=120, i--, i=1.
// i=1, 1 >= 1, 120*1=120, i--. i=0.
// i=0, 0 < 1. End of loop.
