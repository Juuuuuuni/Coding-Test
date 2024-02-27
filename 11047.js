const fs = require("fs");
const [nAndK, ...A] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = nAndK.split(" ").map(Number);
const coins = [...A].map(Number);
const orderedByDescCoins = coins.sort((a, b) => b - a);

let answer = 0;
let totalLeft = K;
for (let i = 0; i < N; i++) {
    const coin = orderedByDescCoins[i];
    answer += Math.floor(totalLeft / coin);
    totalLeft %= coin;
}

console.log(answer);