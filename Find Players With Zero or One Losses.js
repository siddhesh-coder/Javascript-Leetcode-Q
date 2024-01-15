var findWinners = function (matches) {
  const ans = [];
  const map = new Map();

  const n = matches.length;
  const m = matches[0].length;

  for (let i = 0; i < n; i++) {
    const lost = matches[i][1];
    map.set(lost, (map.get(lost) || 0) + 1);
  }

  const winners = new Set();
  const losses = new Set();

  for (let i = 0; i < n; i++) {
    const ones = matches[i][0];
    const sec = matches[i][1];
    if (map.get(sec) === 1) {
      losses.add(sec);
    }
    if (!map.has(ones)) {
      winners.add(ones);
    }
  }

  const arr1 = Array.from(winners);
  arr1.sort((a, b) => a - b);
  const arr2 = Array.from(losses);
  arr2.sort((a, b) => a - b);

  ans.push(arr1);
  ans.push(arr2);

  return ans;
};

const matches = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
];

console.log(findWinners(matches));
