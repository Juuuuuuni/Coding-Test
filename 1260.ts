// 4 5 1
// 1 2
// 1 3
// 1 4
// 2 4
// 3 4


const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const line = input.map((l) => l.split(" ").map(Number));

const ansDfs = [];
const ansBfs = [];

const graph = Array.from({ length: N + 1}, () => []);
let visited = Array.from({ length: N + 1 }, () => 0);

const queue = [];

for (let [from, to] of line) {
    graph[from].push(to);
    graph[to].push(from);
}

for (let i = 1; i < graph.length; i++) {
    graph[i].sort((a, b) => a - b);
}

function dfs(cnt) {
    if (ansDfs.length === N) return;

    ansDfs.push(cnt);
    visited[cnt] = 1;
    for (let next of graph[cnt]) {
        if (!visited[next]) {
            visited[next] = 1;
            dfs(next);
        }
    }
}

dfs(V);

visited = visited.map(() => 0);

function bfs() {
    queue.push(V);
    visited[V] = 1;
    while (queue.length !== 0) {
        const now = queue.shift();
        ansBfs.push(now);
        for (let next of graph[now]) {
            if (!visited[next]) {
                queue.push(next);
                visited[next] = 1;
            }
        }
    }
}

bfs();

console.log(ansDfs.join(" "));
console.log(ansBfs.join(" "));