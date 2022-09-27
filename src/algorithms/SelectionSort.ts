import { delay, swap } from "./utility";

export default async function selectionSort(
  array: number[],
  n: number,
  setArr: Function,
  speed: number
) {
  console.log("Selection Sort");
  let i, j, min_idx;

  const arr: number[] = array;
  for (i = 0; i < n - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      await delay(15);
      if (arr[j] < arr[min_idx]) min_idx = j;
    }
    swap(arr, min_idx, i);
    await delay(15);
    setArr([...arr]);
  }

  array = [...arr];
  return array;
}
