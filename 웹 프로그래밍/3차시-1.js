let b = 25,
  res = 60;

const f = (temp, cnt) => {
  if (cnt > res) return;
  if (temp === b) {
    if (cnt < res) res = cnt;
    return;
  }

  if (temp < b) {
    f(temp + 10, cnt + 1);
    f(temp + 5, cnt + 1);
    f(temp + 1, cnt + 1);
  } else {
    f(temp - 10, cnt + 1);
    f(temp - 5, cnt + 1);
    f(temp - 1, cnt + 1);
  }
};

f(-7, 0);

console.log(res);
