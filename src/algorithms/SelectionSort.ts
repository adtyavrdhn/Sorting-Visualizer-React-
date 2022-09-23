import { delay, swap } from "./utility";
export default async function selectionSort(
  arr: number[],
  n: number,
  initTowers: Function
) {
  var i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++)
      if (arr[j] < arr[min_idx]) (min_idx = j), await delay(35);

    // Swap the found minimum element with the first element
    swap(arr, min_idx, i);
    await delay(35);
    initTowers();
  }
}
