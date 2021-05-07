function getSumXY(a, b) {
  const maxX = Math.max(a[0], b[0]);
  const minX = Math.min(a[0], b[0]);
  const maxY = Math.max(a[1], b[1]);
  const minY = Math.min(a[1], b[1]);

  const sumXY = maxX - minX + maxY - minY;

  return sumXY;
}

function solution(board) {
  let answer = 0;
  const map = {};

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      map[board[i][j]] = [i, j];
    }
  }

  const entries = Object.entries(map);

  for (let i = 0; i < entries.length - 1; i++) {
    const curr = entries[i][1];
    const next = entries[i + 1][1];

    // console.log("curr:", curr, "next:", next);

    const sumXY = getSumXY(curr, next);

    if (sumXY === 1) {
      answer += 1;
      console.log("plus:", 1);
    } else {
      let newX = curr[0];
      let newY = curr[1];
      let moveCount = 0;
      let newSumXY;

      if (curr[0] === 0) {
        newX = 2;
        moveCount += 1;
      } else if (curr[0] === 2) {
        newX = 0;
        moveCount += 1;
      }
      newSumXY = getSumXY([newX, newY], next) + moveCount;
      moveCount = 0;

      if (curr[1] === 0) {
        newY = 2;
        moveCount += 1;
      } else if (curr[1] === 2) {
        newY = 0;
        moveCount += 1;
      }

      // console.log(sumXY, getSumXY([newX, newY], next), moveCount, newSumXY);

      newSumXY = Math.min(getSumXY([newX, newY], next) + moveCount, newSumXY);

      // console.log(sumXY, newSumXY);

      answer += Math.min(sumXY, newSumXY);

      console.log("plus:", Math.min(sumXY, newSumXY));
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 7, 8],
    [2, 3, 5],
    [6, 9, 4],
  ]),
  "\n"
);

console.log(
  solution([
    [3, 2, 5],
    [6, 7, 1],
    [9, 8, 4],
  ]),
  "\n"
);

console.log(
  solution([
    [2, 7, 8],
    [6, 4, 9],
    [1, 3, 5],
  ]),
  "\n"
);
