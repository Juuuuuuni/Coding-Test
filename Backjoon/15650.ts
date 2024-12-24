const [N, M] = "4 2".split(" ").map(Number);
const visited = Array.from({ length: M + 1 }, () => false);

const arr = [];

const dfs = (cnt) => {
  if (cnt === M) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i] && (!arr[cnt - 1] || arr[cnt - 1] < i)) {
      visited[i] = true;
      arr[cnt] = i;
      dfs(cnt + 1);
      visited[i] = false;
    }
  }
};

dfs(0);
