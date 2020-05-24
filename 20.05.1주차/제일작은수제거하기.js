function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    } else {
        let min = arr.reduce((a, b) => a < b ? a : b)
        return arr.filter((a, i) => a !== min);
    }
}