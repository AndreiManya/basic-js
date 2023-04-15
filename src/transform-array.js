const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  try {
    return [...arr].filter((e) => e).reduce((acc, e, i, arr) => {
      let next = arr[i+1],
          prev = arr[i-1];
    switch (true) { 
        case e === '--double-next': {
            return next ? acc.concat([next]) : acc;
            break;
        }
        case e === '--double-prev': {
            return prev ? acc.concat([prev]) : acc;
            break;
        }
        case e === '--discard-next': {
            next ? arr.splice(i, 2) : '';
            break;
        }
        case e === '--discard-prev': {
            prev ? acc.pop() : ''
            break;
        }
        default: {
           return acc.concat([e]); 
           break;
        }
      }
      return  acc;
    }, [])
  } catch {
      throw new Error("'arr' parameter must be an instance of the Array!")
  }
}

module.exports = {
  transform
};
