// Head function

const head = function(myArray) {
  return myArray[0];
};


// Implement assertEqual - Lotide Assignment
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


assertEqual(head([5, 6, 7]), 5);
assertEqual(head([5, 6, 7]), 7)
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([]), undefined);
assertEqual(head([5, 6, 7]), "tide")
assertEqual(head([100]), 100);