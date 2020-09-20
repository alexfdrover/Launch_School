function objectHasProperty(obj, str) {
  return obj[str] === undefined ? false : true;
}

function incrementProperty(obj, str) {
  if (objectHasProperty(obj, str)) {
    return obj[str] += 1;
  } else {
    return obj[str] = 1;
  }
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }