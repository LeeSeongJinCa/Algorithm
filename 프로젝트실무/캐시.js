function solution(cacheSize, cities) {
  const queue = [];
  let answer = 0;

  if (cities.length === 0) return 0;
  if (cacheSize === 0) return cities.length * 5;

  const cities2 = cities.map((v) => v.toUpperCase());

  for (let i = 0; i < cities2.length; i++) {
    if (queue.indexOf(cities2[i]) >= 0) {
      answer++;
      queue.push(queue.splice(queue.indexOf(cities2[i]), 1)[0]);
    } else {
      if (queue.length >= cacheSize) {
        queue.shift();
      }
      queue.push(cities2[i]);
      answer += 5;
    }

    if (queue.length < cacheSize) {
      if (queue.indexOf(cities2[i]) >= 0) {
        answer++;
        queue.push(queue.splice(queue.indexOf(cities2[i]), 1)[0]);
      } else {
        queue.push(cities2[i]);
        answer += 5;
      }
    } else {
      if (queue.indexOf(cities2[i]) >= 0) {
        answer++;
        queue.push(queue.splice(queue.indexOf(cities2[i]), 1)[0]);
      } else {
        answer += 5;
        queue.shift();
        queue.push(cities2[i]);
      }
    }
  }

  return answer;
}
