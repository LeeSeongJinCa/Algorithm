function solution(array, commands) {
    var answer = [];
    for (let i = 0; i < commands.length; i++) {
        answer.push([...array].splice(commands[i][0] - 1, commands[i][1] - commands[i][0] + 1).sort()[commands[i][2] - 1]);
    }
    return answer;
}