
function twice(integer) {
  let string = String(integer);
  let length = string.length

  if (length % 2 !== 0 ) {
    return 2 * integer;
  }

  for (let i = 0, j = length / 2; i < length / 2; i += 1, j += 1) {
    if (string[i] !== string[j]) return 2 * integer;
  }

  return integer;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676