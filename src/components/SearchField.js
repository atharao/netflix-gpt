import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { SelectedLang } from "../utils/constants";
import gemini from "../utils/gemini";
import {API_OPTIONS} from "../utils/constants";

const SearchField = () => {
  const currentLang = useSelector((store) => store.language.lang);

  const searchValue = useRef(null);

  const fetchGPTResults = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  };

  const handleSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query:" +
      searchValue.current.value +
      " only give me names of 5 movies, comma separated like the example result ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";

    const gptResults = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });

    const arr = gptResults.text.split(",");
    // console.log(arr);

    const promiseArr = arr.map((movie) => fetchGPTResults(movie));

    const data = await Promise.all(promiseArr);
    console.log(data);
  };

  return (
    <form
      className="flex"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder={SelectedLang[currentLang].placeholder}
        ref={searchValue}
        className="text-black"
      />
      <button className="p-2 bg-black" onClick={handleSearch}>
        {SelectedLang[currentLang].search}
      </button>
    </form>
  );
};

export default SearchField;
