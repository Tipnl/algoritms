// Bubble Sorting

//PsuedoCode:
// function that takes an array
// var swapped
// do while loop.
// check if swapped is false
// for loop  => index > index+1 => swapped true ; close the loop
// return the array

// Code:

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
