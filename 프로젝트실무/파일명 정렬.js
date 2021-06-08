function solution(files) {
  const answer = [],
    len = files.length,
    reg = /(\d+)/g;

  for (let i = 0; i < len; i++) {
    answer.push({ index: i, value: files[i].split(reg) });
  }

  answer.sort((a, b) => {
    const head1 = a.value[0].toLowerCase(),
      head2 = b.value[0].toLowerCase();
    if (head1 < head2) return -1;
    else if (head1 > head2) return 1;
    else {
      const num1 = +a.value[1],
        num2 = +b.value[1];
      if (num1 > num2) return 1;
      else if (num1 < num2) return -1;
      else return a.index < b.index ? -1 : 1;
    }
  });

  return answer.map((_) => _.value.join(""));
}
