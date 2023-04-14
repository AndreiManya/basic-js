const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( e, obj ) {
  let newstr = (str, reptimes, separ, add, addtimes, addsepar) => { 
    let noRepeatStr = str + '',
        repeated = '',
        separChecked = separ !== undefined ? separ : '+' ;
        reptimesCheked = !reptimes && separChecked ? 1 : reptimes,
        addtimesChecked = !addtimes && add ? 1 : addtimes,
        addseparChecked = !addsepar && '|' || addsepar;
        for(let i = 0; i<addtimesChecked; i++) {
            noRepeatStr = noRepeatStr
                                    .concat(add)
                                    .concat(i+1 !== addtimesChecked ? addseparChecked : '');
        }
    for(let k = 0; k<reptimesCheked; k++) {
      repeated = repeated
                          .concat(noRepeatStr)
                          .concat(k+1 !== reptimesCheked ? separChecked : '')
    }
    return repeated;
  }
  return newstr(e, obj.repeatTimes, obj.separator, obj.addition, obj.additionRepeatTimes, obj.additionSeparator)
}

module.exports = {
  repeater
};
