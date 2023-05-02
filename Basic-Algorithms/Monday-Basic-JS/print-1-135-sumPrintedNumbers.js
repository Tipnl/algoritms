// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

// Psuedocode:
// Loop through numbers 1 to 135, make sure to start with 1.
// Print numbers 1 to 135.
// Multiply the number by 2, so 3 becomes 6, 4 becomes 8 ect ect.
// Print that result next to the number. ex. Number: 1, Sum: 1.

// Code:
let sum = 0;

for (let i = 0; i <= 135; i++) {
  sum += i;
  console.log(`Number is: ${i} sum: ${sum}`);
}

// Diagram:
// i = 1, 1 < 135 so Prints Number is: 0, Sum: 0, i++ i=1
// i = 2, 2 < 135 so Prints Number is: 1, Sum: 1 because prev was 1, i++. i=2
// i = 3, 3 < 135 so Prints Number is: 2, Sum: 3 because prev was 2, i++. i=3
// i = 135, 135 = 135, so Prints Number is: 135, Sum: 269 because prev was 134. i++. i=136
// i = 136, 136 > 135, so the loop stops.
