import { swap } from "./utility";
export default async function bubbleSort(
  arr: number[],
  delay: Function,
  towers: JSX.Element[]
) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  console.log(arr);
}
