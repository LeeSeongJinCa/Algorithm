function solution(progresses, speeds) {
  var answer = [];

  const doneDays = progresses.map((pro, i) => {
    let j = 0;
    while (pro < 100) {
      pro += speeds[i];
      j++;
    }
    return j;
  }); // [7,3,9]

  let flag = 1, i = 0;
  while (i < doneDays.length) {
    if (doneDays[i] >= doneDays[i + flag]) { // flag++
      flag++;
    } else { // 배포
      answer.push(flag);
      i += flag;
      flag = 1;
    }
  }
  return answer;
}