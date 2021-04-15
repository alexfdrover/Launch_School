let scissorsId = 0;
let scissorsName = 'Scissors';
let scissorsStock = 8;
let scissorsPrice = 10;

let drillId = 1;
let drillName = 'Cordless Drill';
let drillStock = 15;
let drillPrice = 45;

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    describe() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: $${this.price}`);
      console.log(`Stock: ${this.stock}`);
    },
    setPrice(newPrice) {
      if (newPrice < 0) return 'Warning: cannot change price to negative';
      this.price = newPrice;
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);

drill.describe();
drill.setPrice(300);
drill.describe();