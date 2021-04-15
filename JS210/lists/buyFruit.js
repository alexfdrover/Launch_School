function buyFruit(list) {
  let newList = [];

  list.forEach(line => {
    for (let i = 0; i < line[1]; i += 1) {
      newList.push(line[0]);
    }
  });

  return newList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]