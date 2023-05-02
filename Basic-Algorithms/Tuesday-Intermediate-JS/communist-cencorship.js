// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

// PsuedoCode:
// Make a program that program needs arr and word as argument.
// Declare variable with given array.
// create empty string that will be *
// loop through array
// use if statement to find word.
// if word in arr is not same as target push word to array.
// else, loop through the found word and write a * for every letter
// push each word to new array.

function comCen(arr, word) {
  let result = [];
  let stars = "";
  for (let i = 0; i < arr.length; i++) {
    if (word === arr[i]) {
      for (let j = 0; j < word.length; j++) {
        stars += "*";
      }
      result.push(stars);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let X = ["Man", "I", "Love", "The", "Matrix", "Program"];
console.log(communist(x, "Matrix"));

// Diagram
// User calls function with the array (X) and their chosen word ("Matrix").
// Variable results gets made, array with no elements.
// Variable stars get made. empty string.
// Loop starts, let i = 0, length of array is 6, i incremented by 1.
// i = 0, pos 0 value is 'Man', 0 < 6, 'Man' is not 'Matrix', goes else condition. Else pushes 'Man' to array result. i++ 0+1=1, i=1.
// i = 4, pos 4 value is "Matrix", 4 < 6, 'Matrix' === 'Matrix', goes to 2nd loop.
// Loop starts, let j = 0, length of word is 6,  j incremented by 1.
// j = 0, pos 0 value is M, M is replaced by * and * is put into empty string. j++, 0+1=1. i=1.
// j = 5, pos 5 value is x, x is replaced by * and * is put into empty string. j++, 5+1=6. j=6.
// j = 6, 6 = 6, J Loop ends. i++, 4+1=5, i=5.
// i = 5, pos 5 value is 'Program', 'Program' is not 'Matrix', goes else condition. Else pushes 'Program' to array result. i++, 5+6. i=6.
// i = 6, 6 = 6, I loop ends.
