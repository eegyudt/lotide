const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case 1: Check the returned array elements
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: numbers
result = tail([1, 2, 3, 4, 5]);
assertEqual(result.length, 4); // ensure we get back two elements
assertEqual(result[0], 2); // ensure first element is "2"
assertEqual(result[1], 3); // ensure second element is "3"

// Test Case 3: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 4: one item
result = tail([100]);
assertEqual(result.length, 0); // ensure we get back two elements
