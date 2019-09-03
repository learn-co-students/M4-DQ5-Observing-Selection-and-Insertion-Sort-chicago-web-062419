// Insertion sort works by looking at each element within a list (starting with the second element) and comparing it with the item before. If the item before is larger, they are swapped. This continues until the item is smaller at which point we do the same for the next element in the list.

function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
  return arr;
}
