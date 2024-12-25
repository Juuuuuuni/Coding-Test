solution(
  [
    [2, 2],
    [2, 3],
    [2, 7],
    [6, 6],
    [5, 2],
  ],
  [
    [2, 3, 4, 5],
    [1, 3, 4, 5],
  ],
);

function solution(points, routes) {
  const moveToOneStep = (start, end) => {
    const [x1, y1] = start;
    const [x2, y2] = end;

    return x1 !== x2
      ? [x1 > x2 ? x1 - 1 : x1 + 1, y1]
      : [x1, y1 > y2 ? y1 - 1 : y1 + 1];
  };

  const pathHistories = [];

  const addPath = (startPoint, endPoint) => {
    const [startPointIndex, endPointIndex] = [startPoint - 1, endPoint - 1];
    const [startPointX, startPointY] = points[startPointIndex];
    const [endPointX, endPointY] = points[endPointIndex];
    let [nextPointX, nextPointY] = moveToOneStep(
      points[startPointIndex],
      points[endPointIndex],
    );

    const pathHistory = [[startPointX, startPointY]];

    while (nextPointX !== endPointX || nextPointY !== endPointY) {
      pathHistory.push([nextPointX, nextPointY]);
      [nextPointX, nextPointY] = moveToOneStep(
        [nextPointX, nextPointY],
        points[endPointIndex],
      );
    }

    pathHistory.push([endPointX, endPointY]);

    return pathHistory;
    // pathHistories.push(pathHistory);
  };

  routes.forEach((route, index) => {
    if (route.length === 2) {
      const pathHistory = addPath(route[0], route[1]);
      pathHistories.push(pathHistory);
      // [[ [1, 2], [2, 4] ], [ [1, 2], [2, 4] ]]
    } else {
      console.log("route: ", route);
      let pathHistoryWith = [];
      for (let i = 0; i < route.length - 1; i++) {
        const pathHistory = addPath(route[i], route[i + 1]);
        console.log("pathHistory: ", pathHistory);
        // [ [1, 2], [2, 4] ]
        pathHistoryWith = [...pathHistoryWith, ...pathHistory];
        pathHistories.push(pathHistoryWith);
      }
    }
  });

  let maxLengthPath = 0;
  pathHistories.forEach((pathHistory, index) => {
    if (maxLengthPath < pathHistory.length) maxLengthPath = pathHistory.length;
  });

  let crushCount = 0;
  for (let i = 0; i < maxLengthPath; i++) {
    const list = new Map();
    for (let j = 0; j < pathHistories.length; j++) {
      const xy = pathHistories[j][i];

      if (!xy) continue;
      const stringXY = xy.join("");

      if (list.has(stringXY)) {
        if (list.get(stringXY) !== 1) continue;

        crushCount++;
        list.set(stringXY, 2);
      } else {
        list.set(stringXY, 1);
      }
    }
  }

  console.log("crushCount: ", crushCount);
  return crushCount;
}
