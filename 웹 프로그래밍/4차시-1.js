function countingSort(array, k) {
  const count = [],
    result = [];

  // ? 모든 숫자의 개수를 0으로 초기화
  for (let i = 0; i <= k; i++) {
    count[i] = 0;
  }

  // ? 숫자의 개수를 세어 저장
  for (let i = 0; i < array.length; i++) {
    count[array[i]] += 1;
  }

  // ? 누적합 구하기
  for (let i = 0; i < k; i++) {
    count[i + 1] += count[i];
  }

  // ? 누적합이 가르키는 인덱스를 기반으로 결과에 숫자 넣기
  for (let i = 0; i < array.length; i++) {
    result[count[array[i]] - 1] = array[i];
    count[array[i]] -= 1;
  }

  return result;
}

console.log(countingSort([3, 4, 0, 1, 2, 4, 2, 4], 4)); // ! [0, 1, 2, 2, 3, 4, 4, 4];
