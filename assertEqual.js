// Implement assertEqual - Lotide Assignment
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + "Assertion Passed: " + actual + " === " + expected);
    return;
  }

  console.log(String.fromCodePoint(0x1F534) + String.fromCodePoint(0x1F534) + String.fromCodePoint(0x1F534) + "Assertion failed: " + actual + " !== " + expected);
  return;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(3, "3");
assertEqual('stringy', "stringy");
assertEqual(1, 10);