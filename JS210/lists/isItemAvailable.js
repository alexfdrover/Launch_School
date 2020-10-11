function transactionsFor (itemID, transactionList) {
  return transactionList.filter(line => line.id === itemID);
}

function isItemAvailable(itemID, transactionList) {
  let stock = transactionsFor(itemID, transactionList)
      .reduce((sum, item) => {
        if (item.movement === 'in') {
          return sum += item.quantity;
        } else {
          return sum -= item.quantity;
        }
      }, 0);

  return stock > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true