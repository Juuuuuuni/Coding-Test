/*
* https://www.acmicpc.net/problem/11053
LIS: Longest Increasing Subsequence
*
* Binary Search를 이용
* 시간복잡도: O(NlogN)
* 공간복잡도: O(N)
* https://velog.io/@arthur/12738.-%EA%B0%80%EC%9E%A5-%EA%B8%B4-%EC%A6%9D%EA%B0%80%ED%95%98%EB%8A%94-%EB%B6%80%EB%B6%84-%EC%88%98%EC%97%B4-3-node.js-javascript
*
* */
import { binarySearch } from "./utils/binarySeach";

const fs = require("fs");
const [sequenceLength, sequenceString] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
// const [sequenceLength, sequenceString] = ["6", "10 20 10 30 20 50"]
const sequenceList = sequenceString.split(" ").map(Number);

const LIS = [sequenceList[0]];
for (let num of sequenceList) {
  if (LIS[LIS.length - 1] < num) {
    LIS.push(num);
  } else {
    let idx = binarySearch(num, LIS);
    LIS[idx] = num;
  }
}

console.log(LIS.length);
