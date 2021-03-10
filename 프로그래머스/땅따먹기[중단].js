function solution(land) {
  let answer = 0;
  let prevIdx = -1;
  let i = 0;

  // while (true) {
  //   if (i === land.length) {
  //     break;
  //   }

  //   let bigIdx = findBiggestIndex(land[i]);

  //   console.log(i, prevIdx, bigIdx);

  //   if (prevIdx === bigIdx) {
  //     land[i][bigIdx] = 0;
  //     bigIdx = findBiggestIndex(land[i]);
  //     i--;
  //     continue;
  //   }

  //   prevIdx = bigIdx;

  //   answer += land[i][bigIdx];
  //   i++;
  // }

  for (let i = 0; i < land.length; i++) {
    let bigIdx = findBiggestIndex(land[i]);

    if (prevIdx === bigIdx) {
      land[i][bigIdx] = 0;
      bigIdx = findBiggestIndex(land[i]);
      i--;
      continue;
    }

    prevIdx = bigIdx;

    answer += land[i][bigIdx];
  }

  return answer;
}

// 제일 큰 수 찾는 함수
function findBiggestIndex(arr) {
  let big = 0,
    idx = -1;

  for (let i = 0; i < arr.length; i++) {
    if (big > arr[i]) continue;

    big = arr[i];
    idx = i;
  }

  return idx;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16

console.log(
  solution([
    [4, 3, 2, 1],
    [2, 2, 2, 1],
    [6, 6, 6, 4],
    [8, 7, 6, 5],
  ])
); // 20
