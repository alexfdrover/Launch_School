function logOccurences(object) {
  for (let item in object) {
    console.log(`${item} => ${String(object[item])}`)
  }
}

function countOccurrences(array) {
  let objContainer = {};
  for (let i = 0; i < array.length; i += 1) {
    let currentObj = array[i];
    objContainer[currentObj] = objContainer[currentObj] || 0;
    objContainer[currentObj] += 1;
  }

  logOccurences(objContainer);
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2