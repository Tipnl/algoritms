// Sum all numbers in a range.

// PsuedoCode:
// Array with 2 numbers.
// reorder array => if
// declare var to save the result
// loop
// sum all the numbers
// return the result.

function sumAll(arr) {
  if (arr[0] > arr[1]) {
    arr.sort((a, b) => a - b);
  }
  let sum = 0;

  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }

  return sum;
}

function sumAll(arr) {
  let sum = 0;
  let [minRange, maxRange] = arr; // Destructring

  if (minRange > maxRange) {
    [minRange, maxRange] = [maxRange, minRange]; // Swap the variables
  }
  for (let i = minRange; i <= maxRange; i++) {
    sum += i;
  }

  return sum;
}
