import { delay, swap } from "./utility";

export default async function selectionSort(
  array: number[],
  n: number,
  setArr: Function
) {
  console.log("Selection Sort");
  var i, j, min_idx;

  let arr: number[] = array;
  for (i = 0; i < n - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      await delay(5);
      if (arr[j] < arr[min_idx]) min_idx = j;
    }
    swap(arr, min_idx, i);
    await delay(35);
    setArr([...arr]);
  }

  array = [...arr];
  return array;
}
