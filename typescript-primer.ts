// TYPE SYNTAX

// TS adds the ability to indicate types for variables
const personName: string = "Frank";

// built-in types are available
const width: number = 10;
const isAvailable: boolean = true;
const now: Date = new Date();
const fruits: string[] = [
    "apple",
    "banana",
    "cherry",
    // 123 // type warning!
];

// you can also declare your own types and interfaces
type Person = {
    name: string;
    birthYear: number; // optional
};
interface Book {
    title: string,
    author?: Person,
    publicationYear?: number
}

const proGit: Book = {
    title: "Pro Git",
    publicationYear: 2014,
    author: {
        name: "Scott Chacon", // try commenting
        birthYear: 40 // no idea of actual age
    }
};

// don't ALWAYS declare everything -- rely on type inference!
const books = [
    proGit
];

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
const yearsSince3 = proGit.publicationYear ? currYear - proGit.publicationYear : 0;

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