import { delay } from "./utility";

export default async function mergeSort(
  arr: number[],
  setArr: Function,
  speed: number
) {
  console.log("Merge Sort");
  const list: number[] = arr;
  await mergseSortRange(list, 0, list.length - 1, setArr, speed);
  arr = [...list];
  return arr;
}

async function mergseSortRange(
  list: number[],
  l: number,
  r: number,
  setArr: Function,
  speed: number
) {
  if (l >= r) return;

  const m = Math.floor(l + (r - l) / 2);
  await mergseSortRange(list, l, m, setArr, speed);
  await mergseSortRange(list, m + 1, r, setArr, speed);
  await merge(list, l, m, r, setArr, speed);
}

async function merge(
  list: number[],
  l: number,
  m: number,
  r: number,
  setArr: Function,
  speed: number
) {
  const res = list.slice(l, r + 1);
  let i1 = l;
  let i2 = m + 1;
  let i = l;
  while (i1 <= m && i2 <= r) {
    const v1 = res[i1 - l];
    const v2 = res[i2 - l];

    if (v1 < v2) {
      list[i++] = v1;
      ++i1;
      await delay(15);
      setArr([...list]);
    } else {
      list[i++] = v2;
      ++i2;
      await delay(15);
      setArr([...list]);
    }
  }

  while (i1 <= m) {
    list[i++] = res[i1++ - l];
    await delay(15);
    setArr([...list]);
  }
  while (i2 <= m) {
    list[i++] = res[i2++ - l];
    await delay(15);
    setArr([...list]);
  }
}
