function solution(bridge_length, weight, truck_weights) { // (2, 10, [7,4,5,6]): 8
  var answer = 0;
  const wholeLength = truck_weights.length;
  const overBridge = [];
  const crossingTruck = Array(bridge_length);
  let sumOfWeight = 0;
  let time = 0;

  crossingTruck[bridge_length - 1] = truck_weights.shift(); // 처음 트럭 출발

  for (let i = 0; overBridge.length === wholeLength; i++) {
    if (time === 2) {
      overBridge.push(crossingTruck.shift());
    }
    if (truck_weights[0] + sumOfWeight > weight) {
      time++;
      continue;
    }
    crossingTruck.push(truck_weights.shift())
  }


  return answer;
}

// 아직 미 성공