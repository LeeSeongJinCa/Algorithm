const exe = (str, operation1, operation2) => {
  let a = str
    .split(operation1)
    .map((x) => (x.includes(operation2) ? eval(x) : x))
    .join(operation1);
  return a;
};

function solution(expression) {
  const priors = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["-", "*", "+"],
    ["-", "+", "*"],
    ["+", "-", "*"],
    ["+", "*", "-"],
  ];

  const maps = priors.map(([x, y, z]) =>
    Math.abs(eval(exe(exe(expression, x, y), x, z)))
  );

  console.log(maps);

  return Math.max(...maps);
}

console.log(
  solution(
    "177-661*999*99-133+221+334+555-166-144-551-166*166-166*166-133*88*55-11*4+55*888*454*12+11-66+444*99"
  )
); // 6083974714

("177-661*999*99-133+221+334+555-166-144-551-166*166-166*166-133*88*55-11*4+55*888*454*12+11-66+444*99");
