function solution(x, n) {
    var answer = [];
    let copy = x;
    for (let i = 0; i < n; i++) {
        answer.push(x);
        x += copy;
    }

    return answer;
}