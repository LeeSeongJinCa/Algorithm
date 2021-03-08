function solution(n) {
  const binary = n.toString(2);
  const lastOneIdx = binary.lastIndexOf("1");
  let end = -1;

  for (let i = lastOneIdx; i >= 0; i--) {
    if (binary[i] === "0") {
      end = i;
      break;
    }
  }

  if (end === -1) {
    const copy = ("1" + binary).split("");

    copy[1] = "0";

    if (lastOneIdx + 1 !== binary.length) {
      const changedOneIdx = lastOneIdx + 1;
      const moveIdx = copy.length - changedOneIdx - 1;

      for (let i = changedOneIdx; i >= 2; i--) {
        copy[i] = "0";
        copy[i + moveIdx] = "1";
      }
    }

    return parseInt(copy.join(""), 2);
  } else {
    const copy = binary.split("");
    const moveIdx = binary.length - (lastOneIdx + 1);

    copy[end] = "1";
    copy[end + 1] = "0";

    for (let i = lastOneIdx; i >= end + 2; i--) {
      copy[i] = "0";
      copy[i + moveIdx] = "1";
    }

    return parseInt(copy.join(""), 2);
  }
}
