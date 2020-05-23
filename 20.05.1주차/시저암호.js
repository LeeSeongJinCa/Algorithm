// 테스트는 성공
// but, 제출에서 실패
function solution(s, n) {
    const up = new Array(25).fill(0).map((_, i) => String.fromCharCode(65 + i))
    const low = new Array(25).fill(0).map((_, i) => String.fromCharCode(97 + i))
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") continue;
        if (up.some((a) => a === s[i])) {
            s = insertStr(up, s, i, n);
        } else {
            s = insertStr(low, s, i, n);
        }
    }
    return s;
}

function insertStr(typeArr, s, i, n) {
    s = s.split("");
    s[i] = typeArr[(typeArr.findIndex((a) => a === s[i]) + n) % 25];
    return s.join("");
}

// 제출 성공
function solution(s, n) {
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === " ") {
            answer += " ";
        }
        else {
            if ("A" <= char && char <= "Z") {
                answer += String.fromCharCode((char.charCodeAt() + n - 65) % 26 + 65);
            } else {
                answer += String.fromCharCode((char.charCodeAt() + n - 97) % 26 + 97);
            }
        }
    }
    return answer;
}