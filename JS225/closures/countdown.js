function countdown(count) {
  (function(n) {
    for (let i = n; i >= 0; i -= 1) {
      console.log(i);
    }
    console.log('Done!');
  })(count);
}

countdown(7);