/*
 * https://www.acmicpc.net/problem/10815
 * Set 을 이용해서 비교하기
 * 시간 복잡도 : O(N)
 * 공간 복잡도 : O(N)
 * */
const fs = require("fs");
const [N, numbersOfCard, M, targetNumbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbersOfCardSet = new Set(numbersOfCard.split(" ").map(Number));
const answer = [];
targetNumbers.split(" ").forEach((n) => {
  // Set has의 시간복잡도 O(1)
  if (numbersOfCardSet.has(Number(n))) answer.push(1);
  else answer.push(0);
});

console.log(answer.join(" "));
