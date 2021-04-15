function objectsEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  let keys1 = Object.keys(obj1).sort();
  let keys2 = Object.keys(obj2).sort();
  let values1 = Object.values(obj1).sort();
  let values2 = Object.values(obj2).sort();
  if (keys1.length !== keys2.length || values1.length !== values2.length) return false;


  for (let i = 0; i < keys1.length; i += 1) {
    if (keys1[i] !== keys2[i] || values1[i] !== values2[i]) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false