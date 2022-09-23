import { delay, swap } from "./utility";

function partition(
  items: number[],
  left: number,
  right: number,
  initTowers: Function
) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      initTowers();
      i++;
      j--;
    }
  }
  return i;
}

export default async function quickSort(
  items: number[],
  left: number,
  right: number,
  initTowers: Function
) {
  var index;
  if (items.length > 1) {
    await delay(5);
    index = partition(items, left, right, initTowers); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      await delay(5);
      quickSort(items, left, index - 1, initTowers);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      await delay(5);
      quickSort(items, index, right, initTowers);
    }
  }
  return items;
}
