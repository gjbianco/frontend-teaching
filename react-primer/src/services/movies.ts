export type Movie = {
  title: string;
  year: number;
  genres: string[];
};

const movies: Movie[] = [
  { title: "The Matrix", year: 1999, genres: ["sci-fi", "action"] },
  { title: "The Shawshank Redemption", year: 1994, genres: ["drama"] },
  { title: "The Wizard of Oz", year: 1939, genres: ["music", "fantasy"] },
];

// notice that the correct return type is inferred
export async function getMovies() {
  return Promise.resolve(movies);
}
