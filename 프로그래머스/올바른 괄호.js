function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count < 0) return false;

    if (s[i] === "(") count++;
    else count--;
  }

  if (count !== 0) return false;

  return true;
}
