function solution(seoul) {
    var answer = '';
    const len = seoul.length;

    for (let i = 0; i < len; i++) {
        if (seoul[i] === "Kim") {
            answer = `김서방은 ${i}에 있다`;
            break;
        }
    }
    return answer;
}