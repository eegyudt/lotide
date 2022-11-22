const assert = require('chai').assert;
const tail = require('../tail'); //tail removes the first element of an array

describe("#tail", () => {
  let result;
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    result = tail([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [2, 3, 4, 5]);
  });

  it('returns 3 for original array length', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("returns empty array for [100]", () => {
    result = tail([100]);
    assert.deepEqual(tail([100]), []);
  });

});



//original tailTest code preserved for comparison
// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Case 1: Check the returned array elements
// let result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: numbers
// result = tail([1, 2, 3, 4, 5]);
// assertEqual(result.length, 4); // ensure we get back 4 elements
// assertEqual(result[0], 2); // ensure first element is "2"
// assertEqual(result[1], 3); // ensure second element is "3"

// // Test Case 3: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // Test Case 4: one item
// result = tail([100]);
// assertEqual(result.length, 0);
