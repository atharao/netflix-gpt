
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movie)
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black '>
      <div className='mt-0 md:-mt-28 xl:-mt-64 md:pl-10  relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Horror"} movies={movies.comedyMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer