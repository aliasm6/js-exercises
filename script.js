console.log('sanity check!');

/* Define a functioncalled sum that takes two numbers as arguments and returns their sum. */

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
isEqual(5,5) // ==> true
isEqual(7,11) // ==> false

/* Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage

*/

function discountPercentage(amount, discount){
  if (discount < 1 || discount > 100){
  return "Warning"}
  else {
    return "$"+amount * (discount/100)
  }
}

discountPercentage(574.54, 33);


/* Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space. */

function stringCapitalize(string) {
    var arrayCaps = [];
    var arrayOfString = string.split(" ");
    for (i=0; i<arrayOfString.length; i++){
       arrayCaps.push(arrayOfString[i].charAt(0).toUpperCase() + arrayOfString[i].slice(1))
    }
    return arrayCaps.join(" ")
  }

stringCapitalize("hello how are you")
//test code console.log(friends[0].charAt(0).toUpperCase())

/* Define a function called evenNumbers that takes an arbitrary integer as an argument, from 0 to 100, and outputs all the even integers from 0 to that arbitrary number. */

/* This function can still take non integers like 11.5 when I tried creating an if else conditional statement to eliminate this using int % 1 !== 0
the function ignored it and treated it as the first if conditional
same with numbers greater than 100
*/

function evenNumbers(int) {
  if(int % 2 !==0) {
      for (i=0; i<=int; i+=2) {
        console.log(i);
      }
    console.log(int);
  }
  else if (int<0 || int>100){
    console.log("I only accept integers from 0 to 100");
  }
  else {for (i=0; i<=int; i+=2) {
      console.log(i);
    }
  }
}
evenNumbers(11);

/*
Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.
*/

function isDivisible(dividend, divisor){
  if (dividend % divisor === 0) {
    return true;
  }
  else {
    return false;
  }
}
isDivisible(20, 5) // ==> true
isDivisible(45, 2) // ==> false

/*
Bonus: Write a function called oddNumbers that takes an arbitrary integer as an argument, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the arbitrary number. If the number is less than 40, output all the odd integers from 0 to 40.
*/
