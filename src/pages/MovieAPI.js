import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const MovieAPI = () => {
  const KEY = "494045466dd86e9e830752858b628394";
  const URL = "https://api.themoviedb.org/3/movie/";

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async (page) => {
    const response = await fetch(
      `${URL}popular?api_key=${KEY}&language=ko-KR&page=${page}`
    );
    const json = await response.json();
    setMovies(json.results);
    setLoading(false);
    console.log(json.results);
    console.log(json.results[0].title);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h2>MovieAPI</h2>
      <div>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div className="movie">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                overview={movie.overview}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MovieAPI;
