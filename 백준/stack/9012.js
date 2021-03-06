const solution = (parentheses) => {
  const stack = [];

  parentheses.split("").map((par) => {
    if (stack.length === 0) {
      stack.push(par);
      return;
    }

    if (stack[stack.length - 1] === par) {
      stack.push(par);
      return;
    }

    const value = stack.pop();
    if (value === ")") {
      stack.push(value);
    }
  });

  if (stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let lineCount;
let count = 0;

rl.on("line", function (line) {
  input.push(line);
  if (count === 0) {
    lineCount = line;
    count = 1;
  } else {
    solution(line);
    if (count >= lineCount) {
      rl.close();
    }
    count += 1;
  }
}).on("close", function () {
  process.exit();
});
