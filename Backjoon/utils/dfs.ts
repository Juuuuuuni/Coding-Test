const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "E", "F"],
  E: ["C", "D", "F"],
  F: ["D", "E"],
};

export const dfsIterative = (graph: any, start: any) => {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const vertex = stack.pop();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      console.log(vertex);

      for (const neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
};
