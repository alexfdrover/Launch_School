/**
 * split input into characters and iterate through them
 * make counters for uppercase, lowercase, neither starting at 0
 * for each character, check if it's upper or lower
 *  control statements to check against regex
 *  lowercase is /[a-z]/
 *  uppercase is /[A-Z]/
 *  depending on its category, increment the associated counter
 * each percentage is itself / (itself + the others), formatted to 2 decimal points
 * return an object
 */

function letterPercentages(input) {
  let characters = input.split('');
  let lowerCounter = 0;
  let upperCounter = 0;
  let neitherCounter = 0;

  characters.forEach(char => {
    if (/[a-z]/.test(char)) {
      lowerCounter += 1;
    } else if (/[A-Z]/.test(char)) {
      upperCounter += 1;
    } else {
      neitherCounter += 1;
    }
  });

  let lowercase = (lowerCounter * 100 / characters.length).toFixed(2);
  let uppercase = (upperCounter * 100 / characters.length).toFixed(2);
  let neither = (neitherCounter * 100 / characters.length).toFixed(2);

  return {
    lowercase,
    uppercase, 
    neither,
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
