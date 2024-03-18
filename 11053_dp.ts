/*
* https://www.acmicpc.net/problem/11053
LIS: Longest Increasing Subsequence
*
* DP를 이용
* N번째일 때 부분 수열의 최대 길이를 점화식으로 처리
* 즉, i번 째일 때, i보다 작은 j값들을 순회하며 부분수열들 중 최대 길이를 찾은 후 1을 더하여 i번째의 부분수열의 길이를 구한다.
* 부분 수열의 길이 중 최대값을 출력한다.
* 시간 복잡도: O(N^2) => 시간 초과가 뜰 수 있다.
* 공간 복잡도: O(N)
*
* */
import {binarySearch} from "./utils/binarySeach";

const fs = require('fs');
const [sequenceLength, sequenceString] = fs.readFileSync('/dev/stdin').toString().split('\n');
// const [sequenceLength, sequenceString] = ["6", "10 20 10 30 20 50"]
const sequenceList = sequenceString.split(" ").map(Number);


const LIS = new Array(Number(sequenceLength));

for(let i = 0; i < sequenceLength; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
        if (sequenceList[i] > sequenceList[j]) {
            max = Math.max(max, LIS[j]);
        }
    }

    LIS[i] = max + 1;
}

console.log(Math.max(...LIS));
