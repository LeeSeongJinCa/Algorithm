// Javascript로 문제가 없습니다.
// 제가 임으로 만들어서 푸는 문제 - 문제 분류는 해시인데 js에서는 해시 없이도 풀 수 있어서 없는거 같습니다.

// 또한 확실한 답이 아니기 때문에 이 solution을 정답으로 봐선 안됩니다. (검증 X)

function solution(phone_book) {
  return (
    phone_book
      .map(
        (c, i) =>
          phone_book.findIndex((_, j) => {
            if (i === j) return;
            return _.includes(c);
          }) !== -1
      )
      .filter((_) => _).length < 1
  );
}
