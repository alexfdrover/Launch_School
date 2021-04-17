let obj = {
  sum: 0,
  add(n) {
    this.sum += n;
    console.log(this.sum);
  },
  subtract(n) {
    this.sum -= n;
    console.log(this.sum);
  },
};

let add = obj.add.bind(obj);
let subtract = obj.subtract.bind(obj);

add(1);
// 1
add(42);
// 43
subtract(39);
// 4
add(6);
// 10