import { delay, swap } from "./utility";

export default async function selectionSort(
  array: number[],
  n: number,
  setArr: Function
) {
  console.log("Selection Sort");
  var i, j, min_idx;

  let arr: number[] = array;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      await delay(5);
      if (arr[j] < arr[min_idx]) min_idx = j;
    }

    // Swap the found minimum element with the first element
    swap(arr, min_idx, i);
    await delay(35);
    setArr([...arr]);
  }

  array = [...arr];
  return array;
}
