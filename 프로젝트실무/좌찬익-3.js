function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (end - start >= 0) {
    let mid = parseInt((end + start) / 2);

    if (array[mid] == target) return mid;
    else if (array[mid] <= target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (end - start >= 0) {
    let mid = parseInt((end + start) / 2);

    if (array[mid] == target) return mid;
    else if (array[mid] <= target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}

console.log("이진탐색 결과 :", binarySearch([3, 5], 5));
