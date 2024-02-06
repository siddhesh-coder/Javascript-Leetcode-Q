var groupAnagrams = function(strs) {
  const map = new Map();
  
  for (const str of strs) {
      const sortedStr = str.split('').sort().join('');
      if (!map.has(sortedStr)) {
          map.set(sortedStr, []);
      }
      map.get(sortedStr).push(str);
  }
  
  const result = [];
  for (const group of map.values()) {
      result.push(group);
  }
  
  return result;
};


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
