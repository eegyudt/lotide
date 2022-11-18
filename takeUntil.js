// LHL Implement takeUntil - Lotide Challenge

//takeUntil function returns an array of items until stopping element
const takeUntil = function(array, callback) {
  const newArray = [];
  for (let item of array) {
    if (!callback(item)) {
      newArray.push(item);
    }
    if (callback(item)) {
      return newArray;
    }

  }
  return newArray;
};

///assertArraysEqual function for testing
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    const greenCheckmark = String.fromCodePoint(0x2705);
    console.log(`${greenCheckmark}${greenCheckmark}${greenCheckmark}Assertion passed: ${actual} === ${expected}`);
    
  } else {
    const redCircle = String.fromCodePoint(0x1F534);
    console.log(`${redCircle}${redCircle}${redCircle}Assertion failed: ${actual} !== ${expected}`);
  }
};

//eqArrays - helper function for assserArraysEqual function
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

//data and function calls
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = ["ground", "control", "to", "major", "tom"];
const results3 = takeUntil(data3, x => x === 'tom');
console.log(results3);

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
// ---
// ["ground", "control", "to", "major"]

// TEST CODE
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]) // => should PASS
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // => should PASS
assertArraysEqual(results3, ["ground", "control", "to", "major"]); // => should PASS
