// Selection sort

// PsuedoCode:
// make a function that takes an array.
// make a loop that loops through the numbers.
// make a loop that checks the numbers against eachother
// at end of iteration smallest val becomes i.
// after done, print array.

const arr = [7, 9, 3, 5, 15, 10, 0];

const selectionSort = (arr) => {
  const len = arr.length;
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < len; i++) {
    let idxOfMin = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[idxOfMin]) idxOfMin = j;
    }

    if (idxOfMin !== i) swap(arr, idxOfMin, i);
  }
  return arr;
};

// const temp = arr[idxOfMin];
//       arr[idxOfMin] = arr[i];
//       arr[i] = temp;

// Baraah Solution.

function selSort(arr) {
  let minIndex, temp;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    // temp = arr[i];
    // arr[i] = arr[minIndex];
    // arr[minIndex] = temp;

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
