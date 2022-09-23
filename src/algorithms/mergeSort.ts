import { isInt16Array } from "util/types";
import { delay } from "./utility";

export default async function mergeSort(list: number[], initTowers: Function) {
  console.log("Merge Sort");
  mergseSortRange(list, 0, list.length - 1, initTowers);

  return list;
}

async function mergseSortRange(
  list: number[],
  l: number,
  r: number,
  initTowers: Function
) {
  if (l >= r) return;

  let m = Math.floor(l + (r - l) / 2);
  await mergseSortRange(list, l, m, initTowers);
  await mergseSortRange(list, m + 1, r, initTowers);
  await merge(list, l, m, r, initTowers);
}

async function merge(
  list: number[],
  l: number,
  m: number,
  r: number,
  initTowers: Function
) {
  let res = list.slice(l, r + 1);
  let i1 = l;
  let i2 = m + 1;
  let i = l;
  while (i1 <= m && i2 <= r) {
    const v1 = res[i1 - l];
    const v2 = res[i2 - l];

    if (v1 < v2) {
      list[i++] = v1;
      ++i1;
      await delay(25);
      initTowers();
    } else {
      list[i++] = v2;
      ++i2;
      await delay(25);
      initTowers();
    }
  }

  while (i1 <= m) {
    list[i++] = res[i1++ - l];
    await delay(25);
    initTowers();
  }
  while (i2 <= m) {
    list[i++] = res[i2++ - l];
    await delay(25);
    initTowers();
  }
}
