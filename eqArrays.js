// mplement eqArrays - Lotide Assignment
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    const redCircle = String.fromCodePoint(0x2705);
    console.log(`${redCircle}${redCircle}${redCircle}Assertion passed: ${actual} === ${expected}`);
    return;
  }

  const greenCheckmark = String.fromCodePoint(0x1F534);
  console.log(`${greenCheckmark}${greenCheckmark}${greenCheckmark}Assertion failed: ${actual} !== ${expected}`);
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
}

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false