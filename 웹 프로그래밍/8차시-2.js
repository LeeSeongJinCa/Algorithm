function solution(n) {
  const dp = Array(10)
    .fill(0)
    .map((_) => Array(10).fill(0));

  dp[0].forEach((_, i) => (dp[0][i] = 1));

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= 9; j++) {
      for (let k = 0; k <= j; k++) {
        dp[i][j] += dp[i - 1][k];
        dp[i][j] %= 10007;
      }
    }
  }

  const answer = dp[n - 1].reduce((a, c) => a + c) % 10007;

  console.log(answer);
  return answer;
}

solution(2);
