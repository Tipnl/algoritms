// Check for Palindromes, A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// PsuedoCode:
// word to use, Tacocat.
// Declare function called isPalindrome(str)
// If statement.
// If word is indeed a Palindrome, return true.
// If word is not a Palindrome, return False.
// Function needs to ignore punctuation, case and spacing.

// Code:

function isPalindrome(str) {
  let polString = str.replace(/\W+|_/g, "").toLowerCase();
  let revString = polString.split("").reverse().join("");

  if (polString != revString) {
    return false;
  }
  return true;
}

// Diagram provided as .png
