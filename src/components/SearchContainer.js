import React from "react";
import SearchField from "./SearchField";
import GPTMoviesSuggestion from "./GPTMoviesSuggestion";

const SearchContainer = () => {
  return (
    <div className="bg-black bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg)] min-h-screen flex items-center justify-center text-white">
      <SearchField />
      <GPTMoviesSuggestion/>
    </div>
  );
};

export default SearchContainer;
