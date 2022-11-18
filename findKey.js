//LHL Implement findKey - Lotide Challenge

const findKey = function(obj, callBack) {

  for (let key in obj) {

    if (callBack(obj[key])) {
      return key;
    }
  }
  return undefined;
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    const greenCheckmark = String.fromCodePoint(0x2705);
    console.log(`${greenCheckmark}${greenCheckmark}${greenCheckmark}Assertion passed: ${actual} === ${expected}`);

  } else {
    const redCircle = String.fromCodePoint(0x1F534);
    console.log(`${redCircle}${redCircle}${redCircle}Assertion failed: ${actual} !== ${expected}`);
  }
};

// TEST CASES
assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)), "noma"); // => "noma";

assertEqual((findKey({
  "Hilton": { stars: 5 },
  "Hyatt": { stars: 5 },
  "Best Western": { stars: 4 },
  "Roadside Motel": { stars: 1 },
  "Campground": { stars: 3 },
  "Home": { stars: 5 }
}, x => x.stars === 4)), "Best Western"); // => "Best Western";
