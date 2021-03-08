function solution(genres, plays) {
  const answer = [],
    allPlays = [],
    obj = {};

  genres.map((genre, i) => {
    const idx = allPlays.findIndex(([g]) => g === genre);

    if (idx === -1) allPlays.push([genre, plays[i]]);
    else allPlays[idx] = [genre, allPlays[idx][1] + plays[i]];

    if (!obj[genre]) {
      obj[genre] = {
        plays: {
          [i]: plays[i],
        },
      };
    } else {
      obj[genre] = {
        plays: {
          ...obj[genre].plays,
          [i]: plays[i],
        },
      };
    }
  });

  allPlays.sort((a, b) => (a[1] < b[1] ? 1 : -1));

  allPlays.map(([genre]) => {
    const entries = Object.entries(obj[genre].plays);
    const len = entries.length > 2 ? 2 : entries.length;

    entries.sort((a, b) => (a[1] <= b[1] ? 1 : -1));

    for (let i = 0; i < len; i++) {
      answer.push(+entries[i][0]);
    }
  });

  return answer;
}
console.time();
console.log(
  "return =",
  solution(
    ["classic", "classic", "pop", "classic", "classic", "pop"],
    [500, 150, 800, 800, 2500, 800]
  ) // return [4, 3, 2, 5]
);
console.timeEnd();
