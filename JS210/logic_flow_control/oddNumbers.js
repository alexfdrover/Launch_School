
function oddNumbers(start, end) {
  for (let i = start; i <= end; i += 1) {
    if (i % 2 !== 0) console.log(i);
  }
}

oddNumbers(-3, 299);