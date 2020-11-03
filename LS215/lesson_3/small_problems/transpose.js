/**
 * problem
 * 3x3 matrix can be represented as an array of 3 subarrays, where each subarr has 3 elements
 * can access elements with arr[][]
 * easy to access all elements in a row, but not all elements in a column
 * want to make a transpose function without modifying original arr
 * 
 * input: nested array of elements - assume integers
 * output: nested array of tranpsosed elements - assume integers
 * rules: do not modify original array - returned array must be new. no external libraries
 *   at least one row and one column
 *   should work for any MxN
 * 
 * examples: below
 * 
 * data: arrays
 * 
 * algo:
 * create a new array container
 * 
 * perform an iteration for each n
 * create a new subarray container
 * for each subarray, access the nth element and push it to the subarray container
 * end
 * when done looping for that n, push the subarray container to the nested array container
 * 
 * return new array container
 */

function transpose(arr) {
  let nestedContainer = [];
  let length = arr[0].length;

  for (let i = 0; i < length; i += 1) {
    let subContainer = [];
    arr.forEach(subarr => subContainer.push(subarr[i]));
    nestedContainer.push(subContainer);
  }

  return nestedContainer;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]