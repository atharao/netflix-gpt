import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () =>{
     // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector(store => store.movie.popularMovies)

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=2',
      API_OPTIONS
    );
    const json = await data.json();
   // console.log(json.results);
    dispatch(addPopularMovies(json.results))
  };

  useEffect(()=>{
     !popularMovies && getPopularMovies();
  },[])

};

export default usePopularMovies;