// ? Recursive Fibonacci
function f1(n) {
  if (n <= 1) return 1;
  else return f1(n - 1) + f1(n - 2);
}

// ? Recursive Fibonacci with DP (Top-Down)
const memo = { 0: 1, 1: 1 };

function f2(n) {
  if (memo[n]) return memo[n];
  return f2(n - 1) + f2(n - 2);
}

// ? Loop Fibonacci with DP (Bottom-Up)
const dp = [];

function f3(n) {
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

const n = 5;

console.time("f1");
console.log("f1 :", f1(n));
console.timeEnd("f1");

console.time("f2");
console.log("f2 :", f2(n));
console.timeEnd("f2");

console.time("f3");
console.log("f3 :", f3(n));
console.timeEnd("f3");
