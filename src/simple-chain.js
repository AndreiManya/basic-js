const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split('~~').length;
  },
  addLink(value) {
    this.chain += this.chain ? `~~( ${value} )` : `( ${value} )`;
    return this
  },
  removeLink(position) {
    if (typeof this.chain.split('~~')[position - 1] === 'undefined') {
      this.chain = '';
      throw new Error("You can't remove incorrect link!")
    }
    let copy = this.chain.slice().split('~~');
    copy.splice(position-1, 1);
    this.chain = copy.join('~~');
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let result = this.chain;
    this.chain = ''
    return result
  }
};

module.exports = {
  chainMaker
};
