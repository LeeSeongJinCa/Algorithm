function solution(jobs) {
  let answer = 0;
  let runTime = 0;
  let sum = 0;
  jobs.map(([a, b]) => (sum += a + b));
  const heap = [-1];

  for (let i = 0; i < sum; i++) {
    for (let j = 0; j < jobs.length; j++) {
      const job = jobs[j];

      if (i === job[0]) {
        insertHeap(job[1]);
      }
    }

    for (let j = 0; j < jobs.length; j++) {
      if (runTime > 0) break;

      const popValue = deleteHeap();

      if (!popValue) break;

      const waitTime =
        jobs[
          jobs.findIndex((_) => {
            return _[1] === popValue;
          })
        ][0];

      console.log("plus to answer", i, popValue, waitTime);

      answer += i; // 0 3 9
      answer += popValue; // 3 6 9
      answer -= waitTime; // 0 2 1

      runTime += popValue;
    }

    if (runTime !== 0) {
      runTime--;
    }
  }

  function insertHeap(n) {
    heap.push(n);

    let idx = heap.length - 1;
    while (true) {
      if (idx === 1) break;

      const parent = heap[Math.floor(idx / 2)];
      const me = heap[idx];

      if (me > parent) break;

      let buffer = me;
      heap[idx] = parent;
      heap[Math.floor(idx / 2)] = buffer;

      idx = Math.floor(idx / 2);
    }
  }

  function deleteHeap() {
    const rValue = heap[1];

    if (heap.length === 1) return;

    if (heap.length - 1 === 1) {
      return heap.pop();
    }

    heap[1] = heap.pop();

    let idx = 1;
    while (true) {
      if (heap[idx] > heap[idx * 2]) {
        const buffer = heap[idx];
        heap[idx] = heap[idx * 2];
        heap[idx * 2] = buffer;
        continue;
      }

      if (heap[idx] > heap[idx * 2 + 1]) {
        const buffer = heap[idx];
        heap[idx] = heap[idx * 2 + 1];
        heap[idx * 2 + 1] = buffer;
        continue;
      }

      break;
    }

    return rValue;
  }

  return Math.floor(answer / jobs.length);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
); // 9
console.log(
  solution([
    [1, 10],
    [3, 3],
    [10, 3],
  ])
); // 9
