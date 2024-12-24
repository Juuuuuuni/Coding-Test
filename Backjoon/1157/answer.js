const fs = require("fs");
const inputs = fs.readFileSync("./input.txt").toString().trim();
const spellCountMap = new Map();
for (const spell of inputs) {
  const upperCase = spell.toUpperCase();
  if (spellCountMap.has(upperCase)) {
    const currentCount = spellCountMap.get(upperCase);
    spellCountMap.set(upperCase, currentCount + 1);
  }
  else {
    spellCountMap.set(upperCase, 1);
  }
}

let maxSpellCount = 0;
let maxCountSpell = "";
let isDuplicated = false;
spellCountMap.forEach((value, key) => {
  if (maxSpellCount > value) return;
  if (maxSpellCount < value) {
    maxSpellCount = value;
    maxCountSpell = key;
    isDuplicated = false;
    return;
  }
  isDuplicated = true;
});

if (isDuplicated) console.log("?");
else console.log(maxCountSpell);