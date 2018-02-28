var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
function sum(array) {
  // create a variable 'total' to store the sum . init to 0
  var total = 0;
  // run for-loop to access & add each element to the total
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

assertEquals(sum([1, 2, 3, 4]), 10);
assertEquals(sum([10, 10, 10]), 30);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
function evenNumbersOnly(array) {
  // create an empty array to store the even number later.
  var evenArray = []
  // use for-loop to run through the list in array
  for (var i = 0; i < array.length; i++) {
    // use if condition to determine if element is even
    if (array[i] % 2 == 0) {
      // use <push> method to add the element at the end of 'evenArray'
      evenArray.push(array[i]);
    }
  }
  return evenArray;
}
assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier!
function sumEvenNumbers(array) {
  // use evenNumbersOnly() to get the even & create a var to store the array from evenNumbersOnly 
  var evenArray = evenNumbersOnly(array);
  // use sum() to get the sum of the even numbers found previously
  return sum(evenArray);
}

assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers([10, 11, 12]), 22);