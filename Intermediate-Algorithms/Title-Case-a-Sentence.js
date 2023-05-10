// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// PsuedoCode:
// Write a function that takes in a string.
// Declare a var that splits this string and puts every word seperately into an array.
// Loop through every word, take the first letter and capitalize it (.toUpperCase).
// make sure the rest of the word is in lower case (.toLowerCase).
// Make it into a string again with join.

// Code:

function capFirst(str) {
  let words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
