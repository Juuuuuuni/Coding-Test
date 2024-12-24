/*
 * https://www.acmicpc.net/problem/2805
 * 절단기 높이의 최소값을 구해야한다.
 * 절단기 높이를 이진 탐색으로 돌면서 중간 값마다 나무를 잘라서 계산해본다.
 *
 * 시간복잡도 : O(NlogN)
 * 공간복잡도 : O(N)
 * */

// const fs = require("fs");
// const [NM, trees] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [NM, trees] = [
  // "5 20",
  // "4 42 40 26 46"
  "4 7",
  "20 15 10 17",
];
const [N, M] = NM.split(" ").map(Number);
const treeNumbers = trees.split(" ").map(Number);

let lt = 0;
let rt = Math.max(...treeNumbers);
let BestH = 0;

while (lt <= rt) {
  const mid = Math.floor((lt + rt) / 2);

  let choppedTreeHeight = 0;

  /*
   * for문으로 돌릴때와 map으로 돌릴때 메모리 차이가 많이 남
   * for문으로 처리했을 때 : 131352KB	716ms
   * map으로 처리했을 때 : 369956KB	1336ms
   * */
  for (let x of treeNumbers) {
    if (x > mid) {
      choppedTreeHeight += x - mid;
    }
  }
  // treeNumbers.map((tree) => {
  //     const temp  = tree - mid;
  //     if (temp > 0 ) choppedTreeHeight += temp;
  // });

  if (choppedTreeHeight < M) {
    rt = mid - 1;
  } else if (choppedTreeHeight >= M) {
    if (BestH < mid) BestH = mid;
    lt = mid + 1;
  }
}

console.log(BestH);
