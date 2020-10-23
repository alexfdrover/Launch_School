
function fridayThe13ths(year) {
  let counter = 0;
  for (let i = 0; i < 12; i += 1) {
    let date = new Date(`${year}/${i+1}/13`);
    if (date.getDay() === 5) counter += 1;
  }

  return counter;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2