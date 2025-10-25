import { useRef,useState} from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { GoogleGenAI } from "@google/genai";

const GptSearchBar = () => {
  const langKey = useSelector((Store) => Store.config.lang || "en");
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGptSearchClick = async () => {
    setIsLoading(true);
    setError(null);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      " only give me names of 5 movies, comma separated like the example result ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";

    const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_KEY });

    const gptResults = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });

    // console.log(gptResults.text);

    if (!gptResults) {
       setError("Couldn't get recommendations. Please try another search")
    }

    const gptMovies = gptResults.text.split(",");

    // For each movie i will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    setIsLoading(false)
  };
  
  //  search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
         API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  return (
    <div className="md:pt-[10%]  pt-[35%] flex justify-center ">
      <form
        className=" w-full md:w-1/2   grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" m-3 p-2 sm:m-2 col-span-9 rounded-lg"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          className=" col-span-3 m-3 sm:m-2  p-2 px-4 bg-red-700 text-white rounded-lg w-28"
          onClick={handleGptSearchClick}
          disabled={isLoading}
        >
          {isLoading? "Searching..." : lang[langKey]?.search}
        </button>
        {error && <p className="text-red-500 text-lg mt-2 bg-black p-2 rounded-md">{error}</p>}
      </form>
    </div>
  );
};

export default GptSearchBar;
