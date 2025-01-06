function solution(n) {
  let answer = 0;

  let number = n.toString(3);
  let reversed = number.split("").reverse().join("");
  answer = parseInt(reversed, 3);

  return answer;
}
