function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...args) {
  let maxTime = args.length * 2;
  
  let secondsPassed = 0;
  let intervalId = setInterval(() => {
    console.log(secondsPassed++);

    if (secondsPassed >= maxTime) clearInterval(intervalId);
  }, 1000);

  args.forEach(arg => {
    let randTime = Math.floor(Math.random() * maxTime) * 1000;
    setTimeout(arg, randTime);
  });
}

randomizer(callback1, callback2, callback3);