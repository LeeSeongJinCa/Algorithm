function solution(n) {
    var answer = [];

    for (let i = n.toString().length - 1; i >= 0; i--) {
        answer.push(+(n.toString()[i]));
    }

    return answer;
}