import { delay, swap } from "./utility";
export default async function bubbleSort(arr: number[], initTowers: Function) {
  let size = arr.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      await delay(5);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        initTowers();
      }
    }
    await delay(5);
  }
  return arr;
}
