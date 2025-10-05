import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="relative z-20 -mt-40">
        <MovieList movies={movies} title={"Now Playing"} />
        <MovieList movies={movies} title={"Now Playing"} />
        <MovieList movies={movies} title={"Now Playing"} />
        <MovieList movies={movies} title={"Now Playing"} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
