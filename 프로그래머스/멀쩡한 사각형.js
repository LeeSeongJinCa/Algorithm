function solution(w, h) {
  if (w === h) {
    return w * h - w;
  }

  if (w === 1 || h === 1) {
    return 0;
  }

  const white = w + h - greatest(w, h);
  const gray = w * h - white;

  return gray;
}

function greatest(n1, n2) {
  console.log("greatest");
  if (n1 === n2) {
    return n1;
  }

  if (n1 > n2) {
    const n3 = n1 - n2;
    if (n2 > n3) return greatest(n2, n3);
    else return greatest(n3, n2);
  }

  const n3 = n2 - n1;
  if (n1 > n3) return greatest(n1, n3);
  else return greatest(n3, n1);
}

console.log(solution(2, 2));
