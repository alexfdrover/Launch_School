function makeMultipleLister(n) {
  let multiple = n;
  
  return function() {
    for (let i = multiple; i < 100; i += multiple) {
      console.log(i);
    }
  };
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91