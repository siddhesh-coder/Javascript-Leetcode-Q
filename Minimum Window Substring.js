var minWindow = function (s, t) {
  const n = s.length;
  if (t.length > n) return "";

  const map = new Map();
  for (const el of t) {
    map.set(el, (map.get(el) || 0) + 1);
  }

  let countRequired = t.length;
  let minWindowSize = Infinity;
  let j = 0,
    i = 0;
  let track_i = 0;

  while (j < n) {
    const curr_char = s[j];

    if (map.has(curr_char) && map.get(curr_char) > 0) {
      countRequired--;
    }
    map.set(curr_char, (map.get(curr_char) || 0) - 1);

    while (countRequired === 0) {
      let currWindowSize = j - i + 1;

      if (currWindowSize < minWindowSize) {
        minWindowSize = currWindowSize;
        track_i = i;
      }

      map.set(s[i], (map.get(s[i]) || 0) + 1);

      if (map.has(s[i]) && map.get(s[i]) > 0) {
        countRequired++;
      }

      i++;
    }

    j++;
  }

  return minWindowSize === Infinity
    ? ""
    : s.substring(track_i, track_i + minWindowSize);
};

const s = "ADOBECODEBANC",
  t = "ABC";
console.log(minWindow(s, t));
