// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

// Psuedocode:
// Loop through numbers 1 to 135, make sure to start with 1.
// Print numbers 1 to 135.
// Multiply the number by 2, so 3 becomes 6, 4 becomes 8 ect ect.
// Print that result next to the number. ex. Number: 1, Sum: 1.

// Code:
for (i = 1; i <= 135; i++) {
  console.log("Number is: " + i + " Sum: " + i * i);
}

// Diagram:
// i = 1, 1 < 135 so Prints Number is: 1, then multiplies by 1 as i=1, 1*1=1, so Sum: 1, then makes i 2, as 1+1=2.
// i = 2, 2 < 135 so Prints Number is: 2, then multiplies by 2 as i=2, 2*2=4, so Sum: 4, then makes i 3, as 2+1=3.
// i = 3, 3 < 135 so Prints Number is: 3, then multiplies by 3 as i=3, 3*3=9, so Sum: 9, then makes i 4, as 3+1=4.
// ............................
// i = 135, 135 = 135, so Prints Number is: 135, then multiplies by 135 as i=135, 135*135=18225, so Sum: 18225, then makes i 136, as 135+1=136.
// i = 136, 136 > 135, so the loop stops.
