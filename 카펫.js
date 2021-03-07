function solution(brown, yellow) {
  let answer = [];
  const b_y = brown + yellow;
  const sqrtOfB_Y = Math.floor(Math.sqrt(b_y));

  for (let i = 3; i <= sqrtOfB_Y; i++) {
    if (b_y % i === 0) {
      const col = i,
        row = b_y / i; // (세로, 가로)

      if ((col - 2) * (row - 2) === yellow) {
        answer = [row, col];
      }
    }
  }

  return answer;
}

console.log(solution(10, 2));
