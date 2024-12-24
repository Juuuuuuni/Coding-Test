export const binarySearch = (target: number, array: number[]) => {
  let lt = 0;
  let rt = array.length - 1;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (array[mid] === target) return mid;
    else if (array[mid] < target) lt = mid + 1;
    else rt = mid - 1;
  }

  return lt;
};
