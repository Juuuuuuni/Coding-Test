/*
* LIS: Longest Increasing Subsequence
*
* DP를 이용
* Binary Search를 이용
*
*
* */
const fs = require('fs');
const [sequenceLength, sequenceString] = fs.readFileSync('/dev/stdin').toString().split('\n');
const sequenceList = sequenceString.split(" ").map(Number);


const LIS = new Array(Number(sequenceLength));

for(let i = 0; i < sequenceLength; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
        if (sequenceList[i] > sequenceList[j] && LIS[j] > max) {
            max = LIS[j];
        }
    }

    LIS[i] = max + 1;
}

console.log(Math.max(...LIS));


