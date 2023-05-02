// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// PsuedoCode:
// Declare a var with name of x that has the value of [2,1,6,4,-7].
// Write a program that shifts each number by one to the front.

// Code:

const x = [2, 1, 6, 4, -7];

const revArr = [];

for (let i = x.length - 1; i >= 0; i--) {
  const valueI = x[i];

  revArr.push(valueI);
}

console.log(revArr);

// Diagram
// To explain this i need to write this part first.
// Since we are reversing, this means that i does not start with 0.
// Instead we are starting with x.length - 1, the array is 5 elements long.
// But since an Array starts with 0, its 0 1 2 3 4 = 5.
// Therefor we do Array.length (which is 5) - 1, which makes it 4.
// The Array's last index is 4.

// i = 4. 4 > 0. -7 is the arrays (x) 4th element value. -7 data gets stored in valueI. valueI gets pushed in array revArr. i--. 4 - 1 = 3.
// i = 3. 3 > 0. 4 is the arrays (x) 3rd element value. 4 value gets stored in valueI. valueI gets pushed in array revArr. i--, 3-1=2.
// i = 2. 2 > 0. 6 is the arrays (x) 2nd element value. 6 value gets stored in valueI. valueI gets pushed in array revArr. i--, 2-1=1.
// i = 1. 1 > 0. 1 is the arrays (x) 1st element value. 1 value gets stored in valueI. valueI gets pushed in array revArr. i--. 1-1=0.
// i = 0. 0 = 0. 2 is the arrays (x) 0th element value. 2 value gets stored in valueI. valueI gets pushed in array revArr. i--. 0-1=-1.
// i = -1. 0 > -1. Loop ends.
