
const dfs = (cnt) => {
    if (cnt === M) {
        console.log(array.join(" "));
        return;
    }
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {

            visited[i] = true;
            array[cnt] = i;
            dfs(cnt + 1);

            visited[i] = false;
        }
    }
};

let fs = require("fs");
let input = "4 2"
    .split(" ")
    .map(Number);
const N = input[0];
const M = input[1];
const visited = new Array(N + 1).fill(false);
const array = [];
dfs(0);