function solution(queue = [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0]) {
  // 1 -> earn, 0 -> lose
  let answer = 0;
  let bat = 1000;
  let prevFlag = false;

  queue.forEach((q) => {
    if (q) {
      bat = 1000;
      answer += 1000;
      prevFlag = false;
    } else {
      if (prevFlag) {
        bat *= 2;
      } else {
        bat = 1000;
      }
      answer -= bat;
      prevFlag = true;
    }
  });

  return answer;
}

console.log(solution());
