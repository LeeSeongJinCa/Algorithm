// ? 삽입정렬 알고리즘

function insertionSortWithKey(arr) {
  let i, j, key;

  for (i = 1; i < arr.length; i++) {
    key = arr[i];

    for (j = i - 1; j > 0 && key < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSortWithKey([1, 3, 2, 6, 5])); // ! [1, 2, 3, 5, 6]

// --------------------

function insertionSortWithTemp(arr) {
  let i, j, temp;

  for (i = 0; i < arr.length; i++) {
    j = i;

    while (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;

      j--;
    }
  }

  return arr;
}

console.log(insertionSortWithTemp([1, 3, 2, 6, 5])); // ! [1, 2, 3, 5, 6]
