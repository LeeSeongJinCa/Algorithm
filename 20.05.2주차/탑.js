function solution(heights) {
  var answer = [];
  let flag = heights.length - 1, i = flag;

  while (i >= 0) {
    if (flag <= 0) {
      answer.unshift(0);
      flag = --i;
      continue;
    }
    if (heights[i] < heights[flag - 1]) {
      answer.unshift(flag);
      flag = --i;
      continue;
    }
    flag--;
  }
  return answer;
}