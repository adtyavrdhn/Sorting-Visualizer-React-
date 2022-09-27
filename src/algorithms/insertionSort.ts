import { delay } from "./utility";

export default async function insertionSort(
  array: number[],
  n: number,
  setArr: Function,
  speed: number
) {
  console.log("Insertion Sort");

  const arr: number[] = array;
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    await delay(15);
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
      await delay(15);
    }
    arr[j + 1] = key;
    setArr([...arr]);
    await delay(15);
  }
  array = [...arr];
  return array;
}
