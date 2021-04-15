function makeCar(rate, brakeRate) {
  return {
    rate,
    brakeRate,
    speed: 0,
    accelerate() {
      this.speed += this.rate;
    },
    brake() {
      if (this.speed > this.brakeRate) {
        this.speed -= this.brakeRate;
      } else {
        this.speed = 0;
      }
    },
  };
}

let sedan = makeCar(8, 6);

sedan.accelerate();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);
