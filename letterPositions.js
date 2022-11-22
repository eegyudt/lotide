//LHL Implement letterPositions - Lotide Assignment


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


const letterPositions = function(str) {

  const results = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (results[str[i]]) {
        results[str[i]].push(i);
      } else {
        results[str[i]] = [i];
      }
    }
  }

  return results;
};

// const result1 = letterPositions("lighthouse in the house");
// console.log(result1);


// // TEST CODE
// assertArraysEqual(letterPositions("hello").e, [1]); // => should PASS
// assertArraysEqual(letterPositions("banana").n, [2, 4]); // => should PASS


