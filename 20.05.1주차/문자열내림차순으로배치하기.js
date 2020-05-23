function solution(s) {
    const low = [], up = [];
    s.split("").forEach((a) => {
        a - "Z" <= 0 ? up.push(a) : low.push(a);
    })
    return [...low.sort(compStringReverse), ...up.sort(compStringReverse)].join("");
}
function compStringReverse(a, b) {
    if (a > b) return -1;
    if (b > a) return 1;
    return 0;
}