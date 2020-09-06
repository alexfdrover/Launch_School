
// find element lengths, then discard those which are even
// do this all without using map or filter - instead use reduce

function oddLengths(array) {
  return array.reduce((accumulator, element) => {
    if (element.length % 2 !== 0) {
      accumulator.push(element.length);
    }
    return accumulator;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));