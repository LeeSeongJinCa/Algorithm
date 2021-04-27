const dp = Array(10000 + 1).fill(1);
const cost = Array(100 + 1).fill(1);

function solution(cost, k) {
  dp[0] = 1;

  for (let i = 1; i <= cost.length; i++) {
    for (let j = cost[i]; j <= k; j++) {
      dp[j] += dp[j - cost[i]];
    }
  }

  console.log(dp[k]);
  return 0;
}

main([1, 2, 5], 10);
