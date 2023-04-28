// VARIABLE DECLARATIONS ------------------------

// you might've seen var before
var varSux = "some value";

// these days, use let instead
let letIsBetter = true;

// const is great for immutability
const aintChanging = true;

// this would be a runtime error
// aintChanging = false;

// const only cares about assignment
const changingList = [];
changingList.push("some new element");

// TRUTHY vs FALSY ------------------------------

// any expression can be either truthy
const listOfTruth = [
  1,
  true,
  [],
  {},
  "foo",
  "false",
  "0",
  -42,
  // plus many more
];

// or falsy
const listOfLies = [null, undefined, false, 0, NaN, ""];

// if statements check truthiness
if (true) {
  // runs
}

if (1) {
  // also runs
}

// falsy values coerce to false
if (!false) {
  // runs
}

if (!0) {
  // also runs
}

// logical OR is an expression
const fooValue = "foo" || "bar";

// but don't forget that 0 is falsy
const notZero = 0 || 10;

// this leads to weird bugs when checking user input
const userInput = 0;
const inputOrDefault = userInput || 10; // can't ever be 0

// FUNCTIONS ------------------------------------

// function declarations are hoisted
if (addNumbers) {
  // runs
}

// function expressions are not
if (!subtractNumbers && !multiplyNumbers && !divideNumbers) {
  // also runs
}

// functions can be declared
function addNumbers(x, y) {
  return x + y;
}

// functions are expressions
const subtractNumbers = function (x, y) {
  return x - y;
};

// function expressions have a shorthand
const multiplyNumbers = (x, y) => x * y;

// you can still use the shorthand with longer function bodies
const divideNumbers = (x, y) => {
  if (y !== 0) {
    return x / y;
  } else {
    // uh oh
  }
};

// to keep your sanity, just completely ignore the `this` keyword

// WORKING WITH COLLECTIONS

// quickly get values from a list
const [first, second, third] = ["first", "second", "third", "fourth", "fifth"];

// quickly pull fields off of objects
const person = {
  firstName: "Timmy",
  age: 12,
};
const { firstName, age } = person;

// you only need the key if the attribute is the same as a variable
const anotherPerson = {
  firstName,
  age,
};

// copy all the attributes from an object and set new ones
const thirdPerson = {
  ...person,
  lastName: "Smith",
};

// or update existing ones
const fourthPerson = {
  ...thirdPerson,
  firstName: "Julia",
};

// this has the same results
fourthPerson = {
  firstName: "Julia",
  lastName: "Smith",
  age: 12,
};

// it also works for lists
const us = [person, anotherPerson];
const them = [thirdPerson, fourthPerson];
const everybody = [...us, ...them];

// map lets you quickly iterate and build a new list
const numbers = [1, 2, 3, 4, 5, 6];
const doubled = numbers.map((n) => n * 2);

// ASYNCHRONOUS

// Promises
const providesValue = new Promise((resolve, reject) => {
  if (2 > 1) {
    resolve("ran fine");
  } else {
    reject("failed");
  }
});
providesValue
  .then((val) => {
    // val = 'ran fine'
    console.log(val);
  })
  .catch((err) => {
    // won't actually run, but could easily be 'failed'
    console.error(err);
  });

// async/await are just wrappers around Promises
async function usesPromise() {
  try {
    const val = await providesValue;
    // val = 'ran fine'
    return val;
  } catch (e) {
    // would get 'failed'
  }
}

async function alsoAwaits() {
  const fromWrapper = await usesPromise();
  // fromWrapper = 'ran fine'
}
