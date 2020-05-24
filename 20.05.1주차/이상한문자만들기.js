function solution(s) {
    return s.split(" ").map((a) => {
        let copy = "";
        for (let j = 0; j < a.length; j++) {
            if (j % 2) copy += a[j].toLowerCase();
            else copy += a[j].toUpperCase();
        }
        return copy;
    }).join(" ");
}