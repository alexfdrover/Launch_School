/**
 * to be featured is to be:
 * an odd number
 * a multiple of 7
 * all digits occur once
 * 
 * input: a number
 * output: the next featured number AFTER the input number (or an error message if none possible)
 * 
 * starting from the given number + 1, check if featured
 * if so, return that number
 * else, increment the number by one
 */

function featured(int) {
  function uniqueDigits(num) {
    let digits = String(num).split('');
    let numberOfOccurences = {};
    digits.forEach(digit => {
      numberOfOccurences[digit] === undefined ? numberOfOccurences[digit] = 0 : numberOfOccurences[digit] += 1;
    });

    return Object.values(numberOfOccurences).some(num => num > 0) ? false : true;
  }

  for (let i = int + 1; i < 9876543202; i += 1) {
    if (i % 7 === 0 && i % 2 !== 0 && uniqueDigits(i)) return i;
  }
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987