function solution(d, budget) {
    var answer = 0;

    d.sort((a, b) => a - b); // important : don't use just sort() -> [1, 2, 10] => [1, 10, 2]

    for (let i = 0; i < d.length; i++) {
        let a = d[i];
        if (budget - a >= 0) {
            budget -= a;
            answer += 1;
        } else {
            break;
        }
    }

    return answer;
}