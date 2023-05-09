// Return the length of the longest word in the provided sentence.

// PsuedoCode:
// We write a function that takes in a string.
// Declare a var that makes said string into an array of words.
// Declare another var that stores the current longest word when looped
// What i mean with that is a word gets looped, its the longest word for now, it gets stored
// start for that var is 0, so the first word in the loop will be the longest word.
// return / log that var.

//Added part where i can display the longest word aswell. just need to slightly alter return.

// Code:
let str = "The quick brown fox jumped over the lazy dog";

function longestWord(str) {
  let wordArray = str.split(" ");
  let currentLongest = 0;
  // let longestWord = "";

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > currentLongest) {
      currentLongest = wordArray[i].length;
      // longestWord = wordArray[i];
    }
  }
  return currentLongest;
}
