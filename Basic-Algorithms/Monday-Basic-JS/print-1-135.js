// Write a program using JavaScript that will print all the numbers from 1 to 135.

// Psuedocode:
// 1: Loop through integers 1 to 135, make sure to start at 1 and not 0.
// 2: Print each integer to the console.

// Code:
for (i = 1; i <= 135; i++) {
  console.log(i);
}

// Diagram:
// i = 1, 1 < 135, log '1', then i++ makes i 2 because 1+1=2.
// i = 2, 2 < 135, log '1, 2' then i++ makes i 3, because 2+1=3.
// i = 3, 3 < 135, log '1, 2, 3' then i++ makes i 4, because 3+1=4.
// ................
// i = 135, 135 = 135, log '1, 2, 3, ......, 135' then i++ makes i 136, but 136 > 135 the loop will end.
