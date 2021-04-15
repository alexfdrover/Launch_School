function centerOf(string) {
  let center = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    return string[center - 1] + string[center];
  } else {
    return string[center];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"