// Implement assertObjectsEqual - Lotide Assignment

//Returns true if both objects are identical
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(obj1, obj2)) {
    const greenCheckmark = String.fromCodePoint(0x2705);
    console.log(`${greenCheckmark}${greenCheckmark}${greenCheckmark}Assertion passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    const redCircle = String.fromCodePoint(0x1F534);
    console.log(`${redCircle}${redCircle}${redCircle}Assertion failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};
//Returns true if both arrays are identical
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {


  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// TEST CASES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba); // => true
assertObjectsEqual(ab, abc); // => false
assertObjectsEqual(cd, dc); // => true
assertObjectsEqual(cd, cd2);// => false

