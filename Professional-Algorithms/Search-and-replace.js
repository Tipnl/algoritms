// Search and replace.

// PsuedoCode:
// Write a program that will take in a string, a before argument and an after argument.
// the before argument means a word to be replaced.
// the after argument means the word it will be replaced with.
// in the program we need to make the first letter of the replaced letter capitalized
// if statement (if uppercase or lower case)
// return the result.

// Code

let str = "let us go to the Store";
let before = "Store";
let after = "mall";

function myReplace(str, before, after) {
  let capitalizeBefore = before[0].toUpperCase() + before.substring(1);
  let capitalizeAfter = after[0].toUpperCase() + after.substring(1);

  if (before === capitalizeBefore) {
    return str.replace(before, capitalizeAfter);
  } else {
    return str.replace(before, after.toLowerCase());
  }
}

// no diagram needed
