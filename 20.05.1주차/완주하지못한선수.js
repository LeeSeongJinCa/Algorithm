function solution(participant, completion) {
    let answer = '';

    completion.map(person => {
        const idx = participant.findIndex(i => i === person);
        if (idx === -1) {
            answer = participant[idx];
        }
    })
    return answer;
}