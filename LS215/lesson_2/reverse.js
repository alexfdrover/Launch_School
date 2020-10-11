function reverse(string) {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString = newString.concat(string[i]);
  }

  return newString;
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"