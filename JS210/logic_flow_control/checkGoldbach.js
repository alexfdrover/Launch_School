function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 !== 0 || expectedSum < 4) {
    console.log(null);
    return;
  }

  let primeArray = [];
  for (let i = 2; i <= expectedSum - 2; i += 1) {
    if (isPrime(i)) primeArray.push(i);
  }

  primeArray.forEach(element1 => {
    primeArray.forEach(element2 => {
      if (element1 + element2 === expectedSum && element1 <= element2) {
        console.log(element1, element2);
      }
    })
  })  

}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53