 export function getSortList(arr: number[][]): number[][] {
  return arr.map((item) => {
    return item.sort((one, two) => one - two);
  })
}