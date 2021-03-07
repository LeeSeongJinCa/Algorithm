function solution(name) {
  let answer = 0;
  const alphabets = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z".split(
    ", "
  );

  name.split("").map((n) => {
    const idx = alphabets.findIndex((_) => _ === n);

    if (idx <= 13) {
      answer += idx;
    } else {
      answer += 26 - idx;
    }
    console.log("answer: ", answer);
  });

  const regexp = /A/g;
  const ACount = [...name.matchAll(regexp)].length;

  answer += name.length - ACount - 1;

  return answer === -1 ? 0 : answer;
}

console.log(solution("JAZ")); // 실패 (fail)
