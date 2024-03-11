/*
* 주어진 범위의 배열을 잘라서 reverse 시키고 다시 원 배열에 끼워넣는다.
*
*
* */


const fs = require('fs');
const [NM, ...pointsToChange] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = NM.split(" ").map(Number);

const baskets = Array(N).fill(0).map((_, index) => index + 1);

pointsToChange.forEach((point, index) => {
    const [startPoint, endPoint] = point.split(" ").map(Number);
    const startIndex = startPoint - 1;
    const reversedArray = baskets.slice(startIndex, endPoint).reverse();
    reversedArray.forEach((a, index) => baskets[startIndex + index] = a);
});

let result = "";
baskets.forEach((e) => (result += `${e} `));
console.log(result);