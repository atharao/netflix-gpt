import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import SearchContainer from "./SearchContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();

  const toggleState = useSelector((store) => store.search.searchToggleState);

  return (
    <div>
      {toggleState ? (
        <SearchContainer />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
