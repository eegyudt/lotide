const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  let result;

  it("returns [2] for [1, 2, 3]", () => {
    result = middle([1, 2, 3]);
    assert.deepEqual(result, [2]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    result = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result, [3, 4]);
  });

    it("returns [4] for [1, 2, 3, 4, 5, 6]", () => {
    result = middle([1, 2, 3, 4, 5, 6, 7]);
    assert.deepEqual(result, [4]);
  });

  it("returns [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    result = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(result, [5, 6]);
  });

});






//origninal middleTest code preserved for comparison
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');


// assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]); // => should PASS