console.log(
  solution(
    [1, 3, 2],
    [
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "diamond",
      "iron",
      "stone",
    ],
  ),
);
console.log(
  solution(
    [0, 1, 1],
    [
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "iron",
      "iron",
      "iron",
      "diamond",
    ],
  ),
);

function solution(picks, minerals) {
  var answer = 0;
  // 순서가 어찌 됐든 나는 picks의 갯수로 캘수 있는 양만 가능하네
  let [diamondPick, ironPick, stonePick] = picks;
  const pickableMineralCount = (diamondPick + ironPick + stonePick) * 5;
  const mineralCount = minerals.length;

  // picks로 광물을 다 캘 수 있는 경우
  // picks로 광뭉를 다 캘 수 없는 경우 -> 캘 수 있는 갯수만 잘라
  if (pickableMineralCount < mineralCount) {
    minerals = minerals.slice(0, pickableMineralCount);
  }

  // 이제는 다 캘 수 있어
  // mineral을 다섯개씩 쪼개면서 각 광물의 갯수를 세서 리스트에 넣어
  // 다이아 5개, 다이아 4개 철 1개, 다이아 3개 철 2개, 다이아 2개 철 3개
  const mineralBundles = [];
  for (let i = 0; i < minerals.length / 5 - 1; i) {
    const countMap = { diamond: 0, iron: 0, stone: 0 };
    for (let j = 0; j < 5; j++) {
      const mineral = minerals.shift();
      countMap[mineral]++;
    }
    mineralBundles.push(countMap);
  }

  const rest = { diamond: 0, iron: 0, stone: 0 };
  minerals.forEach((mineral) => rest[mineral]++);
  mineralBundles.push(rest);

  mineralBundles.sort((a, b) => b.diamond - a.diamond || b.iron - a.iron);
  // 광물의 갯수를 센 리스트를 순회하면서 다이아가 많으면 다이아로 캐

  mineralBundles.forEach((bundle) => {
    if (diamondPick !== 0) {
      answer += bundle.diamond + bundle.iron + bundle.stone;
      diamondPick--;
    } else if (ironPick !== 0) {
      answer += bundle.diamond * 5 + bundle.iron + bundle.stone;
      ironPick--;
    } else {
      answer += bundle.diamond * 25 + bundle.iron * 5 + bundle.stone;
      stonePick--;
    }
  });

  return answer;
}
