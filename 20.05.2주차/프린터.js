function solution(priorities, location) { // ([2,1,3,2], 2)
  let answer = 0;

  while (true) {
    if (priorities.some((a) => a > priorities[0])) { // 큰게 존재
      priorities.push(priorities.shift());
      location--;

      if (location < 0) location = priorities.length - 1;
    } else { // 큰게 없으면
      priorities.shift();
      location--;
      answer++;

      if (location < 0) return answer;
    }
  }
}