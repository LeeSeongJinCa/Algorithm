function solution(a, b) {
    let answer = 0;
    const [max, min] = [a > b ? a : b, a < b ? a : b];
    if (max !== min) {
        for (let i = min; i <= max; i++) answer += i;
    }
    return answer;
}