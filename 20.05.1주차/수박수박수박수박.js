function solution(n) {
    var answer = '';
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) { // 홀수
            answer = `${answer}수`
        } else { // 짝수
            answer = `${answer}박`;
        }
    }
    return answer;
}