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
      {movies.map((movie) => (
        <div className="card">
          <h3>{movie.title}</h3>
          <div>Released in {movie.year}</div>
          <div>
            <span>Genres:</span>
            <ul>
              {movie.genres.map((genre) => (
                <li>{capitalize(genre)}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}
