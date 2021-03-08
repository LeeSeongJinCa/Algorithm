function solution(s) {
  const answer = [],
    reAll = replaceAll(s),
    parsedReAll = JSON.parse(reAll);

  parsedReAll.sort((a, b) => (a.length > b.length ? 1 : -1));

  for (const i of parsedReAll) {
    for (const j of i) {
      if (!answer.find((_) => _ === j)) answer.push(j);
    }
  }

  return answer;
}

function replaceAll(s) {
  const replaced = s.replace(/{/gi, "[").replace(/}/gi, "]");

  return replaced;
}
