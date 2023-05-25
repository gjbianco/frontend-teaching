// GENERAL INFO & MISCONCEPTIONS

/* 

TypeScript is NOT:
  - CoffeeScript
  - A JavaScript replacement
  - A silver bullet
  - A runtime
  - "OOScript"

Runtimes:
  - Deno
  - Bun.js
  - ts-node (not ACTUALLY a runtime)

*/

// TYPE SYNTAX

// TS adds the ability to indicate types for variables
const personName: string = "Frank";

// built-in types are available
const width: number = 10;
const isAvailable: boolean = true;
const now: Date = new Date();
const fruits = [
  "apple",
  "banana",
  "cherry",
  // 123, // type warning!
];

const stuff = ["box", "shoe", 7, 3.14];

stuff.push("");
stuff.push(3);

if (typeof stuff[2] === "number") {
  console.log(`100 divided by ${stuff[2]} is ${100 / stuff[2]}`);
}

// you can also declare your own types and interfaces
type Person = {
  name: string;
  birthYear: number;
};

const bob = {
  name: "Bob",
  birthYear: 1950,
  favoriteColor: "green",
};
console.log(`${bob.name}'s favorite color is ${bob.favoriteColor}`);

const person: Person = bob;
console.log(
  `${person.name}'s age is ${new Date().getFullYear() - person.birthYear}`
);

// Doesn't have a `favoriteColor` anymore!
// console.log(`${person.name}'s favorite color is ${person.favoriteColor}`);

interface Book {
  title: string;
  author?: Person; // optional
  publicationYear?: number; // optional
}

const proGit: Book = {
  title: "Pro Git",
  publicationYear: 2014,
  author: {
    name: "Scott Chacon", // try commenting
    birthYear: 40, // no idea of actual age
  },
};

// don't ALWAYS declare everything -- rely on type inference!
const books = [proGit];

// DEALING WITH OPTIONALS

// just grabbing the current year
const currYear = new Date().getFullYear();

// const yearsSince = currYear - proGit.publicationYear; // fails because age might be undefined

let yearsSince2 = 0;
if (proGit.publicationYear) {
  // we know it can't be undefined so it's okay
  yearsSince2 = currYear - proGit.publicationYear;
  // but we do have to use let and not const...
}

// we can use a ternary to make it better
const yearsSince3 = proGit.publicationYear
  ? currYear - proGit.publicationYear
  : 0;

// optional objects gets kinda messy...
const authorAge = proGit.author ? currYear - proGit.author.birthYear : 0;

// nullish coalescing makes this cleaner
const authorAge2 = currYear - (proGit.author?.birthYear ?? 0);

// you can just keep chaining if you need
// TS knows that fakeBookAuthorYear can only be a number
const fakeBookAuthorYear = books[10]?.author?.birthYear ?? 0;

// nullish coalescing can be similar to the OR trick, but safer
const someYear = fakeBookAuthorYear || 2000; // if fakeBookAuthorYear is ANY falsy value, then 2000 is used
const someOtherYear = fakeBookAuthorYear ?? 2000; // only 2000 iff fakeBookAuthorYear is null or undefined

// THE ANY TYPE

// rule of thumb: declare enough types to be safe, but not too many

// arguably too many types
function subtractVerbose(x: number, y: number): number {
  return x - y;
}

// not enough types -- x and y are `any`
function addAny(x, y) {
  return x + y;
}
console.log("I can add numbers: " + addAny(13, 7));
console.log("I can add strings: " + addAny("hello", "world"));

// not enough types and it's not as forgiving
function dangerousDivide(x, y) {
  return x / y;
}
console.log("I can divide numbers: " + dangerousDivide(7, 2));
console.log("I can (try to) divide anything: " + dangerousDivide("foo", 2));

// just enough type declarations while letting inference work
function justEnoughPower(x: number, y: number) {
  return x ** y;
}
