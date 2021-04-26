function getCombinations(arr, selectNumber) {
  const results = [];

  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results.map((_) => _.join(""));
}

function getMaximums(arr, crs) {
  const filtered = arr.filter((_) => _[0].length === crs);
  let max = 2;

  filtered.forEach((_) => {
    if (_[1] > max) max = _[1];
  });

  return filtered.filter((_) => _[1] === max).map((_) => _[0]);
}

function solution(orders, course) {
  const answer = [];
  const map = {};
  const sortingOrders = orders.map((_) => _.split("").sort().join(""));

  function add(str) {
    map[str] ? (map[str] += 1) : (map[str] = 1);
  }

  sortingOrders.forEach((order) => {
    course.forEach((crs) => {
      const result = getCombinations(order.split(""), crs);

      result.forEach(add);
    });
  });

  const arrMap = Object.entries(map).filter((_) => _[1] >= 2);

  course.forEach((crs) => {
    answer.push(...getMaximums(arrMap, crs));
  });

  return answer.sort();
}

// let orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
// let orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
let orders = ["XYZ", "XWY", "WXA"];

// let course = [2, 3, 4];
// let course = [2, 3, 5];
let course = [2, 3, 4];

console.time("1");
console.log(solution(orders, course));
console.timeEnd("1");
