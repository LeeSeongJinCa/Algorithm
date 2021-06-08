const permutation = (arr, selectNum) => {
  const result = [];

  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((val, index) => index !== idx);
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permutationArr.map((v) => fixer + v);
    result.push(...combineFixer);
  });

  return result;
};

const isPrime = (num) => {
  let start = 2;
  while (start <= Math.sqrt(num)) {
    if (num % start < 1) {
      return false;
    }
    start += 1;
  }
  return num > 1;
};

function solution(numbers) {
  return [
    ...new Set(
      Array(numbers.length)
        .fill(0)
        .map((_, i) => permutation(numbers.split(""), i + 1).map((_) => +_))
        .flat()
    ),
  ].filter(isPrime).length;
}

console.log(solution("17"));
console.log(solution("1234"));
