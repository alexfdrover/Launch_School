
function triangle(int) {
  for (let i = 0; i <= int; i += 1) {
    let lineContainer = '';

    for (let j = int; j > i; j -= 1) {
      lineContainer += '-';
    }

    for (let k = 0; k < i; k += 1) {
      lineContainer += '*';
    }

    console.log(lineContainer);
  }
}

triangle(5);
triangle(9);
