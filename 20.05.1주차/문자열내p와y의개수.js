function solution(s) {
    let a = 0, b = 0;
    s.split("").forEach((c, i) => {
        if (c === "p" || c === "P") a += 1;
        else if (c === "y" || c === "Y") b += 1;
    })
    return a === b ? true : false;
}