function solution(n) {
  const arr = Array(n).fill(0);
  const printArr = [];
  let i = 1;

  arr[0] = n;
  printArr.push(JSON.stringify(arr));

  while (!arr.every((_) => _ === 1)) {
    if (arr[i - 1] > arr[i]) {
      arr[i - 1]--;
      arr[i]++;
      i--;
      printArr.push(JSON.stringify([...arr].sort((a, b) => (a < b ? 1 : -1))));
      continue;
    }

    i++;
  }

  const uniqueArr = printArr.filter((e, i) => printArr.indexOf(e) === i);

  uniqueArr.forEach((arr) => {
    console.log(
      JSON.parse(arr)
        .filter((_) => _)
        .join(" ")
    );
  });

  return `경우의 수 : ${uniqueArr.length}가지`;
}

console.log(solution(4));
console.log(solution(10));
console.log(solution(15));
console.log(solution(20));
