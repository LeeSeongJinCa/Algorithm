const arr = Array(10)
  .fill(0)
  .map(() => []);
arr[0][0] = 0;

function solution(s1, s2) {
  for (let i = 1; i <= s1.length; i++) {
    arr[i][0] = i;
  }

  for (let j = 1; j <= s2.length; j++) {
    arr[0][j] = j;
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1];
      } else {
        arr[i][j] =
          Math.min(arr[i - 1][j], arr[i - 1][j - 1], arr[i][j - 1]) + 1;
      }
    }
  }

  console.log("최소 편집 거리 : ", arr[s1.length][s2.length]);
}

solution("strike", "stable");
solution("kitten", "sitting");
solution("abcdef", "azced");
solution("ncsoft", "microsoft");
solution("ab", "aa");
