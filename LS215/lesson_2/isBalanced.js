/*
need to count the amount of '(' and ')'
  if ')' appears before '(' return false
  if the amount of '(' !== the amount of ')' return false
*/

function isBalanced(str) {
  let chars = str.split('');
  let leftCount = 0;
  let rightCount = 0;

  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === '(') {
      leftCount += 1;
    } else if (chars[i] === ')') {
      rightCount += 1;
    }

    if (rightCount > leftCount) return false;
  }

  if (leftCount !== rightCount) return false;
  return true;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false