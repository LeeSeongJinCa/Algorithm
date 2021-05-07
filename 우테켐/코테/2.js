const plus = (n1, n2) => n1 + n2;

const minus = (n1, n2) => n1 - n2;

const multiple = (n1, n2) => n1 * n2;

const divide = (n1, n2) => n1 / n2;

function solution(num = "17823", operation = "/") {
  let answer = 0;

  for (let i = 1; i < num.length; i++) {
    const left = +num.slice(0, i);
    const right = +num.slice(i, num.length);

    console.log(left, right, left + right, answer);

    switch (operation) {
      case "+":
        answer += plus(left, right);
        break;
      case "-":
        answer += minus(left, right);
        break;
      case "*":
        answer += multiple(left, right);
        break;
      case "/":
        answer += divide(left, right);
        break;
      default:
        break;
    }
  }

  return answer;
}

console.log(solution());
