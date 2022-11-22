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

* `head(...)`: returns the first element of an array
* `tail(...)`: removes the first element of an array and removes the new array
* `middle(...)`: returns the middle element(s) of an array
* `assertArraysEqual(...)`: asserts array equality
* `assertEqual(...)`: assert equality
* `assertObjectsEqual(...)`: asserts object equality
* `countLetters(...)`: counts all instances of a character
* `countOnly(...)`: counts all instances of an element
* `eqArrays(...)`: checks if two arrays are equal
* `eqObjects(...)`: checks if two objects are equal
* `findKey(...)`: finds object property based on value
* `findKeyByValue(...)`: finds object key based on value
* `letterPositions(...)`: finds index of letter
* `map(...)`: checks element based on index 
* `processargv(...)`: taking command line arguments
* `reverse(...)`: reverst order of string
* `sum(...)`: sum numbers entered in console
* `takeUntil(...)`: returns an array of items until stopping element
* `without(...)`: removes items from array