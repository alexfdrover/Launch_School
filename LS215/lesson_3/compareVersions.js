/*
problem:
want to compare versions of programs that have different numbering systems
comparison is made left to right numerically, delineated by '.'
return values:
  1 if v1 > v2
  -1 if v1 < v2
  0 if v1 === v2
  null if v1 or v2 contain characters other than 0-9 or '.'

example:
given

data:
array of integers

algo:
/split each string by '.' to get list of numbers in string format
/determine array lengths
  /for smaller array, add entries of 0 until array lengths are equal
/loop - compare the two arrays by element
  /for each element pair, convert both to Number
  /calc a - b
    /if negative, return -1
    /if positive, return +1
    /if 0, move to next element
  /if loop ends without an explicit return value, return 0
*/

function compareVersions(version1, version2) {
  let regex = /[^0-9.]/g;
  if (regex.test(version1) || regex.test(version2)) return null;

  let v1StringArray = version1.split('.');
  let v2StringArray = version2.split('.');
  let lengthDifference = v1StringArray.length - v2StringArray.length;

  if (lengthDifference > 0) {
    for (let i = 0; i < lengthDifference; i += 1) {
      v2StringArray.push(0);
    }
  } else if (lengthDifference < 0) {
    for (let i = 0; i < -lengthDifference; i += 1) {
      v1StringArray.push(0);
    }
  }

  for (let i = 0; i < v1StringArray.length; i += 1) {
    let v1Num = Number(v1StringArray[i]);
    let v2Num = Number(v2StringArray[i]);
    if (v1Num > v2Num) {
      return 1;
    } else if (v1Num < v2Num) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('0.1', '1'));                 // -1
console.log(compareVersions('1', '1.0'));                 // 0
console.log(compareVersions('1.0', '1.1'));               // -1
console.log(compareVersions('1.1', '1.2'));               // -1
console.log(compareVersions('1.2', '1.2.0.0'));           // 0
console.log(compareVersions('1.2.0.0', '1.18.2'));        // -1
console.log(compareVersions('1.18.2', '13.37'));          // -1