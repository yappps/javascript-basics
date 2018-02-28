var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function to list the properties of a JavaScript object. Go to the editor

function listProperties(object) {
  /*
  // [ method 1: for..in ]  ***FAILED***
  for ( var properties in object ){
    return console.log(object[properties]); 
  }
  */

  // [ method 2: Object.getOwnPropertyNames(object) ]
  // returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly upon a given object. The array is store as 'objectKeys'
  var objectKeys = Object.getOwnPropertyNames(object);
  // From array to string, joining individual array with ' '
  return objectKeys.join(' ');

}
assertEquals(listProperties({ name: 'Tom Hanks' }), 'name')
assertEquals(listProperties({ name: 'Tom Hanks', age: 50, rollno: 12 }), 'name age rollno')

// Sample Output: name,sclass,rollno

/* ---------------------- EXERCISE 2 ---------------------- */

var books = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    isAvailable: true
  },
  {
    author: "JRR Tolkkien",
    title: "Lord of the Rings",
    isAvailable: true
  },
  {
    author: "JK Rowling",
    title: "Harry Potter: The Prisoner of Azkaban",
    isAvailable: false
  }
];

// 2.1 Define a function listTitles(booksArray) that takes in an array of book objects and returns an array of titles (strings)
function listTitles(booksArray) {
  // create an empty array for 'titles' to be add onto this array
  var arrayTitles = [];
  // use for-loop to access the array of object 
  for (var i = 0; i < booksArray.length; i++) {
    // get the title and add to 'arrayTitles'
    arrayTitles.push(booksArray[i].title);
  }
  // to get rid of the damn undefined
  return arrayTitles;
}

assertEquals(listTitles(books), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter: The Prisoner of Azkaban'])

// 2.2 Define a function listAuthors(booksArray) that takes in an array of book objects and returns an array of authors (strings)

function listAuthors(booksArray) {
  // create an empty array 'arrayAuthors' to add author later on
  var arrayAuthors = [];
  // use for-loop to loop through the array of object and access the object DATA. use length, to determine th array length
  for (var i = 0; i < booksArray.length; i++) {
    // use push to add the author to the 'arrayAuthors' array above
    arrayAuthors.push(booksArray[i].author);
  }
  // return the damn arrayAuthors 
  return arrayAuthors;
}

assertEquals(listAuthors(books), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])

// 2.3 Define a more general function listValues(booksArray, key) that takes in an array of book objects and returns an array of authors (strings)

function listValues(booksArray, key) {
  // again. create an empty array for the 'key' (can be author/title/ or whatever) to be added later
  var keyArray = [];
  for (var i = 0; i < booksArray.length; i++) {
    keyArray.push(booksArray[i].key);
  }
  return keyArray;
}
//assertEquals(listValues(books, 'author'), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])
//assertEquals(listValues(books, 'title'), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter: The Prisoner of Azkaban'])

// 2.4 Define a function getAvailableBooks(booksArray) that returns a list of available books
function getAvailableBooks(booksArray) {
  for (var i = 0; i < booksArray.length; i++) {
    if (booksArray[i].isAvailable == true) {
      console.log(booksArray[i].title);
    }
  }
}
assertEquals(getAvailableBooks(books), ['The Road Ahead', 'Lord of the Rings'])

/* ---------------------- EXERCISE 3 ---------------------- */
/* 3.1 Define an object named fluffycat with the following properties/methods:
    - name: fluffy
    - type: pet
    - makeSound() // return 'meow!'
    - introduceSelf() // return 'meow! my name is fluffy'
*/

var fluffycat = {
  name: 'fluffy',
  type: 'pet',
  makeSound() {
    return "meow!";
  },
  introduceSelf() {
    return "meow! my name is " + this.name;
  }
};
assertEquals(fluffycat.name, "fluffy");
assertEquals(fluffycat.type, "pet");
assertEquals(fluffycat.makeSound(), "meow!");
assertEquals(fluffycat.introduceSelf(), "meow! my name is fluffy");
