/*
* https://www.acmicpc.net/problem/2805
* 절단기 높이의 최소값을 구해야한다.
* 이진 탐색으로 중간 값마다 계산해본다.
*
* */


// const fs = require("fs");
// const [NM, trees] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [NM, trees] = [
    // "5 20",
    // "4 42 40 26 46"
    "4 7",
    "20 15 10 17"
];
const [N, M] = NM.split(" ").map(Number);
const treeNumbers = trees.split(" ").map(Number);
const heights = new Array(Math.max(...treeNumbers)).fill(0).map((t, index) => index + 1);

let lt = 0;
let rt = heights.length - 1;
let BestH = 0;

while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    const midChoppingHeight = heights[mid];

    let choppedTreeHeight = 0;
    treeNumbers.map((tree) => {
        const temp  = tree - midChoppingHeight;
        if (temp > 0 ) choppedTreeHeight += temp;

    });

    if (choppedTreeHeight < M) {
        rt = mid - 1;
    }
    else if (choppedTreeHeight >= M) {
        if (BestH < midChoppingHeight) BestH = midChoppingHeight;
        lt = mid + 1;
    }
}

console.log(BestH);