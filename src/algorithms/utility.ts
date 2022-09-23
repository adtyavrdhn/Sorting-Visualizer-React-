export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function swap(arr: number[], i: number, j: number) {
  await delay(35);
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  await delay(35);
}
