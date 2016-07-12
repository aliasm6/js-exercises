console.log('sanity check!');

/* Define a functioncalled sum that takes two numbers as arguments and treurns their sum. */

function sum(num1, num2) {
  return num1 + num2;
}

var resultSum = sum(1,2);

console.log(resultSum === 3); // =>true
console.log(resultSum === 2); // => false

/* Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.
*/

function isEqual(arg1, arg2) {
    if(arg1 === arg2) {
    return true;
  } else {
    return false;
  }
}

/* Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage

*/

function discountPercentage(amount, discount){
  if (discount < 1 || discount > 100){
  return "Warning"}
  else {
    return "$"+amount * (discount/100)
  }
}
var monies=discountPercentage(574.54, 33)
console.log(monies);

/* Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space. */

function stringCapitalize(string) {
    var arrayCaps = [];
    var arrayOfString = string.split(" ");
    for (i=0; i<arrayOfString.length; i++){
      arrayCaps.push(arrayOfString[i].charAt(0).toUpperCase())
    }
    console.log(arrayCaps);
  }

stringCapitalize("hello how are you")
//sample code console.log(friends[0].charAt(0).toUpperCase())

/* Define a function called evenNumbers that takes an arbitrary integer as an argument, from 0 to 100, and outputs all the even integers from 0 to that arbitrary number. */

function evenNumbers(int)
