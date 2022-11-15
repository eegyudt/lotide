//LHL W1D1 - Reversing a String
const args = process.argv;

const reverse = function(args) {
  
  for (let i = 2; i < args.length; i++) {
    let newString = "";
    for (let j = args[i].length-1; j >= 0; j--) {
      newString = newString + args[i][j];
    }
    console.log(newString);
  }
};

reverse(args);
