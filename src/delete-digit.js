const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = (n+'').split('').map((e, i, arr) => {
    let newarr =  [...arr];
    newarr.splice(i,1);
    return Number(newarr.join(''))
  })
  return result.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
