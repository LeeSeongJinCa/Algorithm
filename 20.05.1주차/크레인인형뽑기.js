function solution(board, moves) {
    let answer = 0;
    const b = [];

    moves.forEach(m => {
        const doll = pickup(board, m - 1);
        if (doll) {
            if (b[b.length - 1] === doll) {
                b.pop();
                answer += 2;
            } else {
                b.push(doll);
            }
        }
    })

    return answer;
}

const pickup = (board, idx) => {
    const newBoard = board;

    for (let i = 0; i < newBoard.length; i++) {
        if (newBoard[i][idx] !== 0) {
            const doll = newBoard[i][idx];
            newBoard[i][idx] = 0;
            return doll;
        }
    }
}