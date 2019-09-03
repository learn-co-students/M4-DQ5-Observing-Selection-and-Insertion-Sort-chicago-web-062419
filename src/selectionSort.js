// Find the smallest element. Swap it with the first element.
// Find the second smallest element. Swap it with the second element.
// Find the third smallest element. Swap it with the third element.
// Repeat finding the next smallest element and swapping it into the corresponding correct position till the array is sorted.

function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let length = arr.length;
  arr.map((e, i) => {
    let min = i; //store index of min value
    for (let j = i + 1; j < length; j++) {
      if (arr[min] > arr[j]) {
        min = j; //updating the index
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  });
  return arr;
}
