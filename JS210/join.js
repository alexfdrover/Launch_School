
function join(array, string) {
  let stringContainer = '';
  for (let i = 0; i < array.length; i += 1) {
    stringContainer += String(array[i])
    if (i < array.length - 1) stringContainer += string;
  }

  return stringContainer;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'