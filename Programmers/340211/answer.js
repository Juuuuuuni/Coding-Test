solution(
  [
    [1, 1],
    [2, 2],
    [3, 3],
  ],
  [
    [1, 2, 1],
    [3, 2, 1],
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

  routes.forEach((route, index) => {
    const [startPoint, endPoint] = route;
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
    pathHistories.push(pathHistory);
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
