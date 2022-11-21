// Tail function

const tail = function(myArray) {
  const newArray = [...myArray];
  newArray.shift();
  return newArray;
};


module.exports = tail;
