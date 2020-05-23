function solution(seoul) {
    let answer = '';
    seoul.some((a, i) => a === "Kim" ? answer = `김서방은 ${i}에 있다` : false)
    return answer;
}