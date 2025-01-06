function solution(d, budget) {
  let answer = 0;
  const arr = d.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    budget = budget - arr[i];
    if (budget >= 0) answer = i + 1;
  }
  return answer;
}
