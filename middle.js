//LHL Implement middle - Lotide Problem

const eqArrays = function(array1, array2) {
  let equalArray = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equalArray = false;
    }
  }
  return equalArray;
};

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

const middle = function(arr) {
  
  let midArray = [];
  let i = 0;

  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    console.log(midArray);
    return midArray;
  }
  
  if (arr.length % 2 === 0) {
    i = arr.length / 2;
    midArray.push(arr[i - 1]);
    midArray.push(arr[i]);
    console.log(midArray);
    return midArray;
  }
  
  i = (arr.length - 1) / 2;
  midArray.push(arr[i]);
  console.log(midArray);
  return midArray;
};

middle([]);
middle([1, 2]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]); // => should PASS




