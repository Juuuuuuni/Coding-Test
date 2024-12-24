/*
 * https://www.acmicpc.net/problem/10816
 *
 * 이진탐색을 이용하여 문제를 푼다
 *
 * 시간복잡도 : O(NlogN) -> N * logN(이진 탐색)
 * 참고 블로그 : https://velog.io/@jjnote22/%EB%B0%B1%EC%A4%80-10816%EB%B2%88-JavaScript
 *
 * */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const list = input[1].split(" ").map(Number);
const m = Number(input[2]);
const findList = input[3].split(" ").map(Number);

let result = new Array(m).fill(0);

//이진탐색 위해 오름차순 정렬
list.sort((a, b) => a - b);

let min = 0;
let max = list.length;

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

for (let i = 0; i < findList.length; i += 1) {
  //찾는 값의 개수 구하기
  result[i] =
    upperBound(list, findList[i], min, max) -
    lowerBound(list, findList[i], min, max);
}

console.log(result.join(" "));
