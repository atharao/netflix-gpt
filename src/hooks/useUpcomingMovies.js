import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () =>{
     // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(store => store.movie.upcomingMovies)
  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=2',
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addUpcomingMovies(json.results))
  };

  useEffect(()=>{
     !upcomingMovies && getUpcomingMovies();
  },[])

};

export default useUpcomingMovies;