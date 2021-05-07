const weight = {
  A: 10,
  B: 8,
  C: 6,
  D: 4,
  E: 2,
  F: 1,
};

function solution(subjects = [90, 40, 50, 60, 20, 100]) {
  const weightToArr = Object.entries(weight).map(([, a]) => a);

  return subjects.reduce((prev, curr, i) => {
    console.log(prev, curr, weightToArr[i], i, curr * weightToArr[i]);
    return prev + curr * weightToArr[i];
  }, 0);
}

console.log(solution());
