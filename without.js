// Implement without - Lotide Problem
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    const greenCheckmark = String.fromCodePoint(0x2705);
    console.log(`${greenCheckmark}${greenCheckmark}${greenCheckmark}Assertion passed: ${actual} === ${expected}`);
    return;
  }

  const redCircle = String.fromCodePoint(0x1F534);
  console.log(`${redCircle}${redCircle}${redCircle}Assertion failed: ${actual} !== ${expected}`);
  return;
};

const eqArrays = function(array1, array2) {
  let equalArray = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equalArray = false;
    }
  }
  return equalArray;
};


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (i = 0; i < source.length; i++) {
    newArray.push(source[i]);
  }
  newArray = newArray.filter((item) => !itemsToRemove.includes(item));
  console.log(newArray);
};

// TEST CODE

// console.log(without([1, 2, 3], [1])); // => [2, 3] - Case 1.
// console.log(without([1, 2, 3], [1, 2])); // => [3] - Case 2.
// console.log(without(["5", "6", "7"], [5, 6, "7"])); // => ["5", "6"] - Case 3.

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);