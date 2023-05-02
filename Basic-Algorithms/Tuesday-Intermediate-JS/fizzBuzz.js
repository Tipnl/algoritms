// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]

// PsuedoCode:
// Declare a var with empty array.
// Loop through numbers 1 to 135.
// if divisible by 3, print 'Fizz', if by 5, print 'Buzz', if by both, print 'fizzBuzz'
// I must say, I have done this algorithm before and i find it very fun! i don't know why but :D

// Code:

let output = [];

function fizzBuzz() {
  for (let i = 1; i <= 135; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      output.push("FizzBuzz");
    } else if (i % 3 == 0) {
      output.push("Fizz");
    } else if (i % 5 == 0) {
      output.push("Buzz");
    } else {
      output.push(i);
    }
  }

  console.log(output);
}

// Diagram:
// This runs just like a normal loop, so i will only cover 5 points, the first i, 3rd i, 5th i, 15th i and last i.
// i = 1. 1 < 135. 1 can not %3 and %5. 1 can not %3. 1 can not %5, 1 gets pushed to array output. i++ 1+1=2. i=2.
// i = 3. 3 < 135. 3 can %3 but not %5. 3 can %3. instead of 3, string 'Fizz' gets pushed to array output. i++ 3+1=4, i=4.
// i = 5. 5 < 135. 5 can not %3 but can %5. 5 can not %3. 5 can %5. instead of 5, string 'Buzz' gets pushed to array output. i++ 5+1=6, i=6.
// i = 15. 15 < 135. 15 can %3 and can %5. instead of 15, string 'FizzBuzz' gets pushed to array output. i++. 15+1=16. i=16.
// i = 135. 135 = 135. 135 can %3 and can %5. instead of 135, string 'FizzBuzz' gets pushed to array output. i++. 135+1=136. i=136.
// i = 136. 136 > 135. Loop ends.
