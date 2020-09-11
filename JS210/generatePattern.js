
function generatePattern(n) {
  for (let i = 1; i <= n; i += 1) {
    let outputString = '';
    for (let j = 1; j <= n; j += 1) {
      if (j <= i ) {
        outputString += String(j);
      } else {
        outputString += String('*');
      }
    }

    console.log(outputString);
  }
}

generatePattern(7);