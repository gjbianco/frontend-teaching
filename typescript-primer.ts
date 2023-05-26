// GENERAL INFO & MISCONCEPTIONS

/* 

TypeScript is NOT:
  - CoffeeScript
  - A JavaScript replacement
  - A silver bullet
  - A runtime
  - "ObjectOrientedScript"

Transpilation:
  - Still use a "compiler"
  - Targeting another programming language
  - Should treat outputs like binary artifacts

Runtimes:
  - DIY + Node.js
  - ts-node (not ACTUALLY a runtime)
  - Deno
  - Bun

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

const personBob: Person = bob;
console.log(
  `${personBob.name}'s age is ${new Date().getFullYear() - personBob.birthYear}`
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
    birthYear: 1980, // no idea of actual age
  },
};

// don't ALWAYS declare everything -- rely on type inference!
const books = [proGit];

// DEALING WITH OPTIONALS

const currYear = new Date().getFullYear();

// publicationYear might be undefined
// console.log(`It's been ${currYear - proGit.publicationYear} years`);

if (proGit.publicationYear) {
  // we know it can't be undefined so it's okay
  console.log(`It's been ${currYear - proGit.publicationYear} years`);
}

// we can also use a ternary for quick assignment
const yearsSince = proGit.publicationYear
  ? currYear - proGit.publicationYear
  : 0;

// optional objects gets kinda messy... (please never do this)
const authorAge = proGit.author
  ? proGit.author.birthYear
    ? currYear - proGit.author.birthYear
    : 0
  : 0;

// we CAN use normal if statements, but that requires let and a type
let authorAgeLet: number;
if (proGit.author && proGit.author.birthYear) {
  authorAgeLet = currYear - proGit.author.birthYear;
}

// nullish coalescing makes this way cleaner
const authorAgeCoalesced = currYear - (proGit.author?.birthYear ?? 0);

// you can just keep chaining if you need
// TS still infers that fakeBookAuthorYear can only be a number
const fakeBookAuthorYear = books[10]?.author?.birthYear ?? 0;

// nullish coalescing can be similar to the OR trick, but safer
const someYear = fakeBookAuthorYear || 2000; // if fakeBookAuthorYear is ANY falsy value (including 0), then 2000 is used
const someOtherYear = fakeBookAuthorYear ?? 2000; // only 2000 iff fakeBookAuthorYear is null or undefined

// THE ANY TYPE

// rule of thumb: declare JUST ENOUGH types to be safe

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

// ASYNC/AWAIT TYPES

// explicit returns are effectively a cast
async function promisesUsers(): Promise<Person[]> {
  const people = [
    { name: "Tom", birthYear: 1950 },
    { name: "Julia", birthYear: 1992 },
    { name: "Frank", birthYear: 1978 },
  ];
  return people;
}

async function awaitsUsers() {
  // we are in trouble if the list is empty...
  const username = (await promisesUsers())[0].name;
  return username;
}

// can't always use await at top level, but it's still just a Promise!
awaitsUsers().then((users) => {
  console.log("First user's name: " + users);
});
