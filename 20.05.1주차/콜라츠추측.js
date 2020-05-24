function solution(num) {
    let i;
    for (i = 0; i < 500; i++) {
        if (num === 1) {
            break;
        } else if (num % 2 === 1) {
            num = num * 3 + 1;
        } else {
            num = num / 2;
        }
    }

    return i === 500 ? -1 : i;
}