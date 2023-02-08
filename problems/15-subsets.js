/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/
/*
 - an array that contains subsets of arrays that have unique pairs
 - input: array
 - output: an array with sub arrays;

 plan:
  - initialize an array with a empty sub array to start
  - slice off the 3? store it away and make pairs with 1 and 2?
  -
*/
// const subsets = (arr) => {
//   // Your code here

//   if(arr.length === 0) {
//     return [[]];
//   }
//   if (arr.length === 1) {
//     return [[], arr];
//   }


// }

const subsets = ([x, ...xs], ys = []) =>
  x == undefined
    ? [ys]
  : [...subsets (xs, ys), ...subsets (xs, [...ys, x])]

console.log(subsets([])) // [[]]
console.log(subsets([1])) // [[], [1]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
