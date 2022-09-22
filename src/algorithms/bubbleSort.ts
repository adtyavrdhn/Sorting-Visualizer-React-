export default async function bubbleSort(arr: number[], delay: Function) {
  let size = arr.length;

  console.log("YES");
  console.log(arr);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      await delay(5);
      if (arr[j] > arr[j + 1]) {
        await delay(5);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    await delay(5);
  }

  console.log(arr);
}
