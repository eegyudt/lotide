# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eegyudt/lotide`

**Require it:**

`const _ = require('@eegyudt/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: takes in two arrays and  their checking match, console.log an appropriate message to the console,
* `assertEqual(...)`: compares the two values and prints out a message if they match or not
* `assertObjectsEqual(...)`: take in two objects and  checking their match, console.log an appropriate message to the console
* `countLetters(...)`: returns a count of each of the letters in a sentence
* `countOnly(...)`: returns an object containing array elements and quantities for the elements in the input object
* `eqArrays(...)`: takes in two arrays and returns true or false, based on a perfect match
* `eqObjects(...)`: takes in two objects and returns true or false, based on a perfect match
* `findKey(...)`: takes in an object and a callback and returns the first key for which the callback returns a truthy value
* `findKeyByValue(...)`: takes in an object and a value and returns the first key which contains the given value.
* `head(...)`: returns the first item in the array
* `letterPositions(...)`: returns all the indices in the string where each character is found
* `map(...)`: take in an array to map and a callback function and returns a new array based on the results of the callback function
* `middle(...)`: takes in an array and return the middle-most element(s) of the given arra
* `processargv(...)`: taking command line arguments
* `reverse(...)`: reverse order of string
* `sum(...)`: sum numbers entered in console
* `tail(...)`: returns the "tail" of an array: everything except for the first item (head) of the array
* `takeUntil(...)`: takes in an array and a callback function and returns a slice of the array with elements taken from the beginning until the predicate returns a truthy value
* `without(...)`: returns a subset of a given array, removing unwanted elements