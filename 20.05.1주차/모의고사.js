function solution(answers) {
    const arr = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]],
        answer = [],
        res = [0, 0, 0];
    arr.forEach((ar, i) => {
        answers.forEach((an, j) => {
            if (an === ar[j % ar.length]) res[i] += 1;
        })
    })
    const max = Math.max(...res.map(o => o), 0);
    const best = res.findIndex(a => a === max);
    res.forEach((r, i) => (r === res[best]) && answer.push(i + 1));
    return answer;
}