function solution(n) {
  if (n === 2) {
    return 3;
  }

  if (n % 2 === 0) {
    return solution(n - 1) * 2 + 1;
  } else {
    return solution(n - 1) * 2 - 1;
  }
}
