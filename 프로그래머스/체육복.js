function solution(n, lost, reserve) {
  const s = Array(n).fill(1);

  for (const i of lost) {
    s[i - 1]--;
  }
  for (const i of reserve) {
    s[i - 1]++;
  }

  for (let i = 0; i < n; i++) {
    if (s[i] !== 0) continue;

    if (s[i - 1] === 2) {
      s[i]++;
      s[i - 1]--;
      continue;
    }

    if (s[i + 1] === 2) {
      s[i]++;
      s[i + 1]--;
      continue;
    }
  }

  return s.filter((_) => _).length;
}

console.log(
  solution(
    27,
    [10, 16, 19, 20, 24, 26, 27],
    [4, 7, 8, 10, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27]
  )
); // 27
console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [1, 2], [2, 3])); // 2
console.log(solution(7, [2, 3, 4, 6], [1, 2, 3])); // 5
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6])); // 6
console.log(solution(5, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // 5
console.log(solution(5, [1, 2, 3], [2, 3, 4])); // 4
console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
