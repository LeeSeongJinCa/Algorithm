function solution(s) {
  const arr = [];

  if (s.length === 1) return 1;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let str = "";
    let cnt = 0;
    for (let j = 0; j < s.length; j += i) {
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
    arr.push(str);
  }

  arr.sort((a, b) => (a.length > b.length ? 1 : -1));

  return arr[0].length;
}
