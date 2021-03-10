function solution(s) {
  const a = s.split(" ").sort((a, b) => (+a > +b ? 1 : -1));

  return `${a[0]} ${a[a.length - 1]}`;
}
