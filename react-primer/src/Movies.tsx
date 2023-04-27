import { useEffect, useState } from "react";
import { Movie, getMovies } from "./services/movies";

export function Movies() {
  // we need to specify the generic type because an empty list isn't a Movie[]
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      {movies.map((movie, index) => (
        <main key={index}>
          <h3>
            {movie.title} ({movie.year})
          </h3>
          <p>{movie.synopsis}</p>
          <details>
            <div>
              <label>Genres</label>
              <ul>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{capitalize(genre)}</li>
                ))}
              </ul>
            </div>
          </details>
        </main>
      ))}
    </div>
  );
}

function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}
