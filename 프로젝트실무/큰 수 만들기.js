function getMax(arr) {
  let m = -1;

  for (let i = 0; i < arr.length; i++) {
    if (m === 9) break;
    if (arr[i] > m) {
      m = arr[i];
    }
  }

  return m;
}

function getMaxIdx(str, max) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === max) {
      return i;
    }
  }
}

function solution(number = "", k = 0) {
  let answer = "";
  let lastIdx = k + 1;
  let str = number.slice(0, lastIdx);

  if (number.split("").every((x) => x === 9)) {
    return "9".repeat(number.length - k);
  }

  for (let i = 0; i < number.length - k; i++) {
    const max = getMax(str);
    const maxIdx = getMaxIdx(str, max);
    const newStart = str.split("");

    answer += str.charAt(maxIdx);
    newStart.splice(0, maxIdx + 1);
    str = newStart.join("");
    str += number.charAt(lastIdx++);
  }

  return answer;
}
