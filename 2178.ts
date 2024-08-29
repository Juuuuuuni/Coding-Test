/*
* https://www.acmicpc.net/problem/2178
* 참고 문헌: https://velog.io/@jiyaho/%EB%B0%B1%EC%A4%80-2178-%EB%AF%B8%EB%A1%9C-%ED%83%90%EC%83%89-Node.js-BFS-%ED%92%80%EC%9D%B4
*
* 주어진 input을 자료구조로 바꿀 수 있어야 함 => 행렬은 2차원 배열로 만들수 있다.
* 목표 설정과 움직임의 정의가 필요함
* 이후 bfs 적용
* */

const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = "4 6\n101111\n101010\n101011\n111011".toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

const maze = input.map(v => v.split("").map(Number));
const goal = [N - 1, M - 1];
const ds = [[-1, 0], [1, 0], [0, -1], [0, 1]];


const bfs = () => {
    const queue = [[0, 0, 1]];

    while (queue.length) {
        const [curY, curX, move] = queue.shift();

        if (goal[0] === curY && goal[1] === curX) return move;

        for (let i = 0; i < 4; i++) {
            const dy = curY + ds[i][0];
            const dx = curX + ds[i][1];

            if (dy >= 0 && dy < N && dx >= 0 && dx < M && maze[dy][dx]) {
                maze[dy][dx] = 0;
                queue.push([dy, dx, move + 1]);
            }
        }
    }
}

console.log(bfs());
