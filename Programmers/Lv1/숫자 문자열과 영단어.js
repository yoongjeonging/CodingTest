function solution(s) {
  let answer = 0;
  engArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < engArr.length; i++) {
    if (s.includes(engArr[i])) s = s.replaceAll(engArr[i], i);
  }
  answer = Number(s);
  return answer;
}
