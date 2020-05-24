function solution(phone_number) {
    var answer = '';
    answer += "*".repeat(phone_number.length - 4);
    for (let i = phone_number.length - 4; i < phone_number.length; i++) {
        answer += phone_number[i];
    }
    return answer;
}