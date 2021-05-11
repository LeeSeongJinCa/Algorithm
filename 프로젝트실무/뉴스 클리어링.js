function getSet(str) {
  const reg = /^[a-z]*$/;
  const set = [];
  const len = str.length;

  str = str.toLowerCase();

  for (let i = 0; i < len - 1; i++) {
    const s = str.slice(i, i + 2);

    if (!reg.test(s)) continue;

    set.push(s);
  }

  return set;
}

function getInter(s1, s2) {
  const intersection = [];

  s1.forEach((x) => {
    const idx = s2.findIndex((_) => _ === x);
    if (idx !== -1) {
      intersection.push(x);
      s2.splice(idx, 1);
    }
  });

  return intersection;
}

function solution(str1 = "", str2 = "") {
  const s1 = getSet(str1);
  const s2 = getSet(str2);

  const len1 = s1.length;
  const len2 = s2.length;

  const intersection = len1 > len2 ? getInter(s1, s2) : getInter(s2, s1);
  const union = [...s1, ...s2];

  if (!intersection.length && !union.length) {
    return 65536;
  }

  return Math.floor((intersection.length / union.length) * 65536);
}

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
