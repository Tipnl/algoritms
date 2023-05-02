// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

// PsuedoCode
// Write a loop that goes through numbers 200 too 2700.
// This loop then prints the numbers that can be divided by 3 or 5 but not both 3 and 5

let output = [];

function addition() {
  for (let i = 200; i <= 2700; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      continue;
    } else if (i % 3 === 0) {
      output.push(i);
    } else if (i % 5 === 0) {
      output.push(i);
    }
  }
}

// Diagram:
// Program starts off by being called, addition().
// Program stores data that parses the said statements and prints them to output.
// Program starts with 200.
// i = 200. 200 < 2700. Is 200 % 3 and 5 = 0? No, only 5. is 200 % 3 0, no, next condition, is 200 % 5, yes. push 200 to output. i++, 200 + 1 = 201.
// i = 201. 201 < 2700. Is 201 % 3 and 5 = 0? No, only 3. is 201 % 3 0, yes, push 201 to output. i++, 201 + 1 202.
// i = 202. 202 < 2700. Is 202 % 3 and 5 = 0? No, neither,  is 202 % 3 0, no, is 202 % 5 0, no, do nothing, i++, 202 + 1 = 203.
// i = 203. 203 < 2700. Is 203 % 3 and 5 = 0? No, neither,  is 203 % 3 0, no, is 203 % 5 0, no, do nothing, i++, 203 + 1 = 204.
// i = 204. 204 < 2700. Is 203 % 3 and 5 = 0? No, only 3,  is 204 % 3 0, yes, push 204 to output. i++. 204 + 1 = 205.
// ..........................
// i = 210. 210 < 2700. is 210 % 3 and 5 = 0? Yes, i++, 210 + 1 = 211.
// ..........................
// i = 2700. 2700 = 2700. is 2700 % 3 and 5 = 0? Yes, i++, 2700 + 1 = 2701.
// i = 2701. 2701 > 2700. End loop.
