export type Movie = {
  title: string;
  year: number;
  genres: string[];
  synopsis: string;
};

const movies: Movie[] = [
  {
    title: "The Matrix",
    year: 1999,
    genres: ["sci-fi", "action"],
    synopsis:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["drama"],
    synopsis:
      "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
  },
  {
    title: "The Wizard of Oz",
    year: 1939,
    genres: ["music", "fantasy"],
    synopsis:
      "Young Dorothy Gale and her dog Toto are swept away by a tornado from their Kansas farm to the magical Land of Oz, and embark on a quest with three new friends to see the Wizard, who can return her to her home and fulfill the others' wishes.",
  },
];

// notice that the correct return type is inferred
export async function getMovies() {
  return Promise.resolve(movies);
}
