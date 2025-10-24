import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GPTMoviesSuggestion = () => {
  const gptMovies = useSelector((store) => store.movies.gptMovies);
  const movieNames = useSelector((store) => store.movies.movieNames);

  return (
    <div>
      <h2>GPT Movie Suggestions</h2>
      {gptMovies &&
        movieNames &&
        movieNames.map((name, index) => (
          <MovieList title={name} movies={gptMovies[index]} key={index} />
        ))}
    </div>
  );
};

export default GPTMoviesSuggestion;
