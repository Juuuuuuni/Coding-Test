/*
* https://www.acmicpc.net/problem/10815
*
* Binary Search 구현해서 찾기
*
* 시간 복잡도 : O(NlogN)
* 공간 복잡도 : O(N)
* */
const binarySearch = (target, array) => {
    let lt = 0;
    let rt = array.length - 1;
    let isExist = false;

    while (lt <= rt) {
        const mid = Math.floor((lt + rt) / 2);
        if (array[mid] < target) {
            lt = mid + 1;
        } else if (array[mid] > target) {
            rt = mid -1;
        } else {
            isExist = true;
            break;
        }
    }

    return isExist;
}

const fs = require("fs");
// const [N, numbersOfCard, M, targetNumbers] = fs.readFileSyne("/dev/stdin").toString().trim().split("\n");
const [N, numbersOfCard, M, targetNumbers] = [
    "5",
    "6 3 2 10 -10",
    "8",
    "10 9 -5 2 3 4 5 -10"
]

// O(NlogN)
const numbersOfCardOrder = numbersOfCard.split(" ").map(Number).sort((a, b) => a - b);


const answer = [];
targetNumbers.split(" ").forEach(n => {
    if (binarySearch(Number(n), numbersOfCardOrder)) answer.push(1);
    else answer.push(0);

});

console.log(answer.join(" "));










