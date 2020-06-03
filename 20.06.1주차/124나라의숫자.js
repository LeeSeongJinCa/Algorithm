function solution(n) {
  let answer = "", div = 0, pefix = ["4", "1", "2"];

  while (n > 0) {
    div = n % 3;
    n = parseInt(n / 3);

    if (div === 0) n = n - 1;
    answer = pefix[div] + answer;
  }
  return answer;
}