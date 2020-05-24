function solution(x) {
    const sum = x.toString().split("").reduce((a, b) => +a + +b);
    console.log(sum)
    return x % sum === 0 ? true : false;
}