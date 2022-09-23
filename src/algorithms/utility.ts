export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
