function solution(n) {
  let answer = 0;
  const ceilN = Math.ceil(n / 2);

  for (let i = 1; i <= ceilN + 1; i++) {
    let sum = 0;
    for (let j = i; j <= ceilN + 1; j++) {
      if (sum > n) break;
      if (sum === n) {
        answer++;
        break;
      }
      sum += j;
    }
  }

  return answer + 1;
}
