import { delay, swap } from "./utility";

export default async function bubbleSort(arr: number[], initTowers: Function) {
  let size = arr.length;

  console.log("Bubble Sort");

  let array: number[] = arr;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      await delay(5);
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        initTowers(array);
      }
    }
    await delay(5);
  }
  arr = [...array];
  return arr;
}
