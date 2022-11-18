// LHL Implement Map - Lotide Assignment

const words = ["ground", "control", "to", "major", "tom"];

//map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);

console.log(results1);
console.log('TEST CASES');


//testing the map function

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    const greenCheckmark = String.fromCodePoint(0x2705);
    console.log(`${greenCheckmark}${greenCheckmark}${greenCheckmark}Assertion passed: ${actual} === ${expected}`);
    
  } else {
    const redCircle = String.fromCodePoint(0x1F534);
    console.log(`${redCircle}${redCircle}${redCircle}Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let equalArray = true;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equalArray = false;
    }
  }
  return equalArray;
};

const results2 = map(['one', 'two', 'three', 'four'], word => word[0]);
const results3 = map(['on', 'a', 'sunny', 'day'], word => word[0]);


// TEST CODE
assertArraysEqual(results2, ['o', 't', 't', 'f']) // => should PASS
assertArraysEqual(results3, ['o', 'a', 's', 'd']); // => should FAIL
