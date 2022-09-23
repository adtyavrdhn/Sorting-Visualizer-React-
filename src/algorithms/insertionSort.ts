import { delay } from "./utility";

export default async function insertionSort(
  arr: number[],
  n: number,
  initTowers: Function
) {
  console.log("Insertion Sort");
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    await delay(35);
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    initTowers();
    await delay(35);
  }
}
