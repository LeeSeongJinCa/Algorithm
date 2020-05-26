function solution(bridge_length, weight, truck_weights) {
  let answer = 0, sumOfWeight = 0;
  const crossingTruck = [];

  for (let i = 0; i < bridge_length; i++) crossingTruck.push(0);

  let nowTruck = truck_weights.shift();

  crossingTruck.push(nowTruck);
  crossingTruck.shift();
  sumOfWeight += nowTruck;
  answer++;

  while (sumOfWeight) {
    sumOfWeight -= crossingTruck.shift();
    nowTruck = truck_weights.shift(); // 대기 트럭 빼기

    if (sumOfWeight + nowTruck <= weight) { // 지나감
      crossingTruck.push(nowTruck);
      sumOfWeight += nowTruck;
    } else { // 못 지나감
      crossingTruck.push(0);
      truck_weights.unshift(nowTruck);
    }
    answer++;
  }
  return answer;
}