// Implement assertEqual - Lotide Assignment
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    const greenCheckmark = String.fromCodePoint(0x2705);
    console.log(`${greenCheckmark}${greenCheckmark}${greenCheckmark}Assertion passed: ${actual} === ${expected}`);

  } else {
    const redCircle = String.fromCodePoint(0x1F534);
    console.log(`${redCircle}${redCircle}${redCircle}Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(3, "3");
// assertEqual('stringy', "stringy");
// assertEqual(1, 10);