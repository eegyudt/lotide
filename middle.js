//LHL Implement middle - Lotide Problem

//const assertArraysEqual = require('../assertArraysEqual');

const middle = function(arr) {

  let midArray = [];
  let i = 0;

  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return midArray;
  }

  if (arr.length % 2 === 0) {
    i = arr.length / 2;
    midArray.push(arr[i - 1]);
    midArray.push(arr[i]);
    return midArray;
  }

  i = (arr.length - 1) / 2;
  midArray.push(arr[i]);
  return midArray;
};

module.exports = middle;