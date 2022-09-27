import { delay, swap } from "./utility";

export default async function bubbleSort(
  arr: number[],
  setArr: Function,
  speed: number
) {
  const size = arr.length;
  console.log("Bubble Sort");

  const array: number[] = arr;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      await delay(speed);
      if (array[j] > array[j + 1]) {
        await delay(speed);
        swap(array, j, j + 1);
        setArr([...array]);
      }
    }
    await delay(speed);
  }
  arr = [...array];
  return arr;
}
