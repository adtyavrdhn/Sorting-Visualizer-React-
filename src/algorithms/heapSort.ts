import { delay } from "./utility";

export default async function heapSort(arr: number[], initTowers: Function) {
  var N = arr.length;

  console.log("Heap Sort");
  // Build heap (rearrange array)
  for (var i = Math.floor(N / 2) - 1; i >= 0; i--) heapify(arr, N, i);

  // One by one extract an element from heap
  for (var i = N - 1; i > 0; i--) {
    // Move current root to end
    var temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    await delay(25);
    // call max heapify on the reduced heap
    await heapify(arr, i, 0);
  }
}
async function heapify(arr: number[], N: number, i: number) {
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < N && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < N && arr[r] > arr[largest]) largest = r;

  // If largest is not root
  if (largest != i) {
    var swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    await heapify(arr, N, largest);

    await delay(25);
  }
}
