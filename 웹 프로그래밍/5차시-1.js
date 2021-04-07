function solution(a = 7, b = [3, 1, 5, 3, 2, 4, 1]) {
  const arr = Array(100001).fill(0);

  for (let i = 0; i < b.length; i++) {
    arr[b[i]] += 1;
  }

  for (let i = 0; i < 10001; i++) {
    for (let j = 0; j < arr[i]; j++) {
      console.log(i);
    }
  }
}

solution();
