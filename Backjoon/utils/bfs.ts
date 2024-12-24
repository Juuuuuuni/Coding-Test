export const bfs = (graph: any, start: any) => {
  const queue = [start];
  const visited = new Set();

  visited.add(start);

  while (queue.length > 0) {
    const vertex = queue.shift();

    if (!visited.has(vertex)) {
      visited.add(vertex);

      console.log(vertex);
    }

    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
};
