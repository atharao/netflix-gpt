import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 ">
        <img
          src={BG_URL}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
