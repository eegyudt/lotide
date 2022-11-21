const assertEqual = require('../assertEqual');

const head = require('../head');

assertEqual(head([5, 6, 7]), 5);
// assertEqual(head([5, 6, 7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([]), undefined);
// assertEqual(head([5, 6, 7]), "tide");
assertEqual(head([100]), 100);
