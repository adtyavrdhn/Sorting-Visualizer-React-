import { delay, swap } from "./utility";

async function partition(
  items: number[],
  left: number,
  right: number,
  setArr: Function,
  speed: number
) {
  console.log("Quick Sort");
  const pivot = items[Math.floor((right + left) / 2)];
  let i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      await delay(15);
      setArr([...items]);
      i++;
      j--;
    }
  }
  return i;
}

export default async function quickSort(
  arr: number[],
  left: number,
  right: number,
  setArr: Function,
  speed: number
) {
  let index;

  const items: number[] = arr;
  if (items.length > 1) {
    await delay(15);
    index = await partition(items, left, right, setArr, speed);
    if (left < index - 1) {
      await quickSort(items, left, index - 1, setArr, speed);
    }
    if (index < right) {
      await quickSort(items, index, right, setArr, speed);
    }
  }

  arr = [...items];
  return arr;
}
