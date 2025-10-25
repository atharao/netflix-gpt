import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRated = () =>{
     // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const topRated = useSelector(store => store.movie.topRatedMovies)

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=2",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRatedMovies(json.results))
  };

  useEffect(()=>{
     !topRated && getTopRatedMovies();
  },[])

};

export default useTopRated;