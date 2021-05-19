function solution(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 3;
  }

  if (n % 2 === 0) {
    return solution(n - 1) * 2 + 1;
  } else {
    return solution(n - 1) * 2 - 1;
  }
}

console.log(solution(1));
console.log(solution(8));
