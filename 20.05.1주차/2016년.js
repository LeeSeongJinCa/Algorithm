function solution(a, b) {
    var answer = '';
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date(`2016.${a}.${b}`);
    return day[date.getDay()];
}