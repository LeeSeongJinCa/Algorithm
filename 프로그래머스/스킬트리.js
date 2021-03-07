function solution(
  skill = "CBD",
  skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]
) {
  const SKSplitted = skill.split("");

  const sMap = skill_trees
    .map((STSplitted) => {
      return s(STSplitted, SKSplitted);
    })
    .filter((e) => !e).length;

  return sMap;
}

function s(STSplitted, SKSplitted) {
  let sp = 0;
  let isFail = false;

  for (const st of STSplitted) {
    const si = SKSplitted.findIndex((sk) => sk === st);

    if (si === -1) continue;

    if (si > sp) {
      isFail = true;
      break;
    }

    sp += 1;
  }

  return isFail;
}

solution(); // 2
