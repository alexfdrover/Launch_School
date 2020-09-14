rlSync = require('readline-sync');
const SQM_TO_SQFT = 10.7639

let length = rlSync.question('Enter the length of the room in meters: ');
let width = rlSync.question('Enter the width of the room in meters: ');

let areaMeters = length * width;
let areaFeet = areaMeters * SQM_TO_SQFT;

console.log(`The length of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`)