function solution(clothes) {
  const map = {};

  clothes.map((cloth) => {
    const key = cloth[1];
    map[key] = (map[key] || 0) + 1;
  });

  const result = Object.keys(map)
    .map((key) => map[key] + 1)
    .reduce((prev, curr) => prev * curr, 1);

  return result - 1;
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

console.log(
  solution([
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
