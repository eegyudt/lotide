//LHL Implement findKeyByValue in Lotide - Lotide Problem

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    const greenCheckmark = String.fromCodePoint(0x2705);
    console.log(`${greenCheckmark}${greenCheckmark}${greenCheckmark}Assertion passed: ${actual} === ${expected}`);
    return;
  }

  const redCircle = String.fromCodePoint(0x1F534);
  console.log(`${redCircle}${redCircle}${redCircle}Assertion failed: ${actual} !== ${expected}`);
  return;
};

const findKeyByValue = function(obj, val) {

  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(Object.keys(bestTVShowsByGenre));

const test = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
console.log(test);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);