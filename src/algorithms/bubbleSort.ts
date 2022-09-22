export default function bubbleSort(arr: number[]) {
  let size = arr.length;

  console.log("YES");
  console.log(arr);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  console.log(arr);
}
