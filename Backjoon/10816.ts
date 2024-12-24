/*
 * https://www.acmicpc.net/problem/10816
 *
 * 가지고 있는 숫자 카드를 순회하면서 각 숫자가 몇개 들어있는지 정리한다 -> Map이용
 * 주어진 카드를 순회하면서 Map에서 확인해본다
 *
 * 시간 복잡도 : O(NlogN)
 * 공간 복잡도 : O(N)
 * */

const fs = require("fs");
const [N, numbersOfCard, M, targetNumbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbersOfCardArray = numbersOfCard.split(" ").map(Number);
const numberCountMap = new Map();

// Map의 삽입, 삭제, 수정, 탐색이 O(logN)
numbersOfCardArray.forEach((n) => {
  if (numberCountMap.has(n)) {
    numberCountMap.set(n, numberCountMap.get(n) + 1);
  } else {
    numberCountMap.set(n, 1);
  }
});

let answer = "";
targetNumbers.split(" ").forEach((n) => {
  const numberN = Number(n);
  answer += numberCountMap.has(numberN)
    ? `${numberCountMap.get(numberN)} `
    : "0 ";
});

console.log(answer);
