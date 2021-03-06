function solution(citations = [3, 0, 6, 1, 5]) {
  const sortCitations = citations.sort((a, b) => (a < b ? 1 : -1));
  let j;

  for (j = 0; j < sortCitations.length; j++) {
    if (j + 1 > sortCitations[j]) {
      break;
    }
  }

  return j;
}
