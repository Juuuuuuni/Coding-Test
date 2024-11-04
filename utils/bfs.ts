

export const bfs = (graph: any, start: any) => {
    const queue = [start];
    const visited = new Set();

    visited.add(start);

    while (queue.length > 0) {
        const vertex = queue.shift();
        console.log(vertex);

        for(const neighbor of graph[vertex]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor)
            }
        }
    }

}