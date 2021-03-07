// function solution(numbers = "17") {
//   let answer = 0;
//   let arr = new Array(+numbers).fill(true); // 1 ~ 17

//   arr[0] = false;

//   for (let i = 2; i ** 2 <= +numbers; i++) {
//     console.log("i", i);
//     arr[i - 1] = false;

//     for (let j = i; j <= +numbers; j += i) {
//       console.log("   j", j);
//       arr[j - 1] = false;
//     }
//   }

//   console.log(arr);

//   return answer;
// }

function solution(n) {
  const primes = new Array(n).fill(true);
  primes[0] = false;
  for (let i = 2; i ** 2 <= n; i++) {
    if (primes[i - 1] === true) {
      for (let j = i ** 2; j <= n; j += i) {
        primes[j - 1] = false;
      }
    }
  }
  return primes.filter((e) => e).length;
}

console.log(solution(17));
