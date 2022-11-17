//LHL Implement countLetters in Lotide - Lotide Assignment

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


// // countLetter will take a string and count all instances of a character
const countLetters = function(str) {
  const results = {};

  for (const char of str) {
    if (char !== " ") {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }

  return results;
};


const result1 = countLetters("lighthouse in the house");
console.log(result1);