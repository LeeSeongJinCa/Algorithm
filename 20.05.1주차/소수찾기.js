function solution(n) {
    let answer = 0;
    const arr = [];

    for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    for (let i = 2; i <= n; i++) {
        if (arr[i] === 0)
            continue;

        for (let j = i + i; j <= n; j += i) {
            arr[j] = 0;
        }
    }
    answer = arr.filter((a) => a !== 0).length;
    return answer;
}