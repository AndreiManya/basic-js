const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date) {
  if(!date) { 
    return 'Unable to determine the time of year!';
  }
  try {
      if (!(date.getTime()) || !(date instanceof Date)) {
        throw new Error('Invalid date!');
      }
      let month = date.getMonth() + 1;
      let season = 'idk';
      switch (true) { 
          case month < 3 || month === 12 : {
              season = 'winter';
              break;
          }
          case month > 2 && month < 6 : {
              season = 'spring';
              break;
          }
          case month > 5 && month < 9 : {
              season = 'summer';
              break;
          }
          case month > 8 && month < 12 : {
              season = 'autumn';
              break;
          }
      }
      return season
  } catch {
      throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
