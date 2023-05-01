// Write a program using JavaScript that will print all the odd numbers from 1 to 135.

// Psuedocode:
// 1- Loop through integers 1 to 135, make sure to start with 1.
// 2- Make it so that instead of printing every number, we only print the odd numbers, 1,3,5 ect.

// Code:
for (i = 1; i <= 135; i += 2) {
  console.log(i);
}

// Diagram:
// i = 1, 1 < 135 so Prints 1, then i will become 3 as 1+2=3.
// i = 3, 3 < 135 so Prints 3, then i will become 5 as 3+2=5.
// i = 5, 5 < 135 so Prints 5, Then i will become 7 as 5+2=7.
// .........................
// i = 135, 135 = 135 so Prints 135, then i will become 137 as 135+2=137.
// i = 137, 137 > 135 so the loop ends.
