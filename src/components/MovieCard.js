import React from "react";
import { IMG_POSTER } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return <img src={IMG_POSTER + movie.poster_path} alt={movie.title}></img>;
};

export default MovieCard;
