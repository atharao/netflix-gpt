import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="text-white">
      <h1 className="p-4 text-3xl font-bold">{title}</h1>
      <div className="flex gap-4 p-4 overflow-x-scroll">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
