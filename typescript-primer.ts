// TYPE SYNTAX

// TS adds the ability to indicate types for variables
const personName: string = "Frank";

// built-in types are available
const age: number = 10;
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
    age?: string;
};
interface Book {
    title: string,
    author: Person,
    publicationYear: number
}

// don't ALWAYS declare everything -- rely on type inference!
const proGit = {
    title: "Pro Git",
    publicationYear: 2014,
    author: {
        name: "Scott Chacon",
    }
}