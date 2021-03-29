const list = [
  "선택정렬",
  "삽입정렬",
  "버블정렬",
  "퀵정렬",
  "병합정렬",
  "해시",
  "스택",
  "큐",
  "힙",
  "그리디",
  "그래프",
  "동적계획법",
  "이분탐색",
  "완전탐색",
  "너비우선탐색",
  "깊이우선탐색",
];

shuffle(list);

const weekList = [
  list.slice(0, 4),
  list.slice(5, 8),
  list.slice(9, 12),
  list.slice(13, 16),
];

for (let i = 0; i < 4; i++) {
  const buffer = list.pop();

  list.unshift(buffer);
  list.push(...weekList[i]);

  console.log([...list]);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
