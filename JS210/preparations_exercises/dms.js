/* 
Problem
take floating point number as an angle, convert to degrees minutes and seconds
60 minutes in a degree, 60 seconds in a minute
degrees denoted with '°', minutes with "\'", seconds with '\"'

Algo
take input
everything before decimal is degrees
remainder is minutes and seconds
multiply this remainder by 60
  result pre-decimal is minutes, THAT remainder is seconds
*/

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? '0' + numString : numString;
}

function dms(inputDegree) {
  let degrees = parseInt(inputDegree, 10);
  let floatMinutes = (inputDegree - degrees) * 60
  let minutes = parseInt(floatMinutes, 10);
  let seconds = parseInt((floatMinutes - minutes) * 60, 10);


  return `${degrees}°${padZeroes(minutes)}\'${padZeroes(seconds)}\"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"