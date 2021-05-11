function solution(s) {
  let answer = s;

  if (s.length === 1) return 1;

  const len = Math.floor(s.length / 2);

  for (let i = 1; i <= len; i++) {
    const sLen = s.length;
    let str = "";
    let cnt = 0;
    for (let j = 0; j < sLen; j += i) {
      const currStr = s.substr(j, i);
      const nextStr = s.substr(j + i, i);

      if (currStr === nextStr) {
        cnt++;
      } else {
        str += (cnt ? cnt + 1 : "") + currStr;
        cnt = 0;
      }

      if (nextStr === "") break;
    }

    if (str.length < answer.length) {
      answer = str;
    }
  }

  return answer.length;
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
