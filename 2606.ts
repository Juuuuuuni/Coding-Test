const input = "7\n6\n1 2\n2 3\n1 5\n5 2\n5 6\n4 7".trim().split("\n");
const computerCount = Number(input.shift());
input.shift();
const networks = input.map(v => v.split(" ").map(Number));
const networkMatrix = Array.from({ length: computerCount + 1 }, () => []);
networks.forEach(n => {
    const [from, to] = n;

    networkMatrix[from].push(to);
    networkMatrix[to].push(from);
});


const visited = Array.from({ length: computerCount + 1}, () => false);
const dfs = (start) => {
    visited[start] = true;

    for (const next of networkMatrix[start]) {
        if (!visited[next]) {
            dfs(next);
        }
    }

}


const bfs = (start) => {
    const queue = [start];

    while (queue.length !== 0) {
        const now = queue.shift();
        if (!visited[now]) {
            visited[now] = true;
            queue.push(...networkMatrix[now])
        }
    }
}

bfs(1);
const answer = visited.filter(v => v).length;
console.log(answer - 1);

