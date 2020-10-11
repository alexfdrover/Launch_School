function leadingSubstrings(str) {
  let newList = [];
  for (let i = 0; i < str.length; i += 1) {
    newList.push(str.slice(0, i + 1));
  }

  return newList;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]