import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { SelectedLang } from "../utils/constants";
import gemini from "../utils/gemini";

const SearchField = () => {
  const currentLang = useSelector((store) => store.language.lang);

  const searchValue = useRef(null);

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
    console.log(arr);
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
