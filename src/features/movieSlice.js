import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    gptMovies: null,
    movieNames: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    gptMovies: (state, action) => {
      const { gptAllMovies, movieNames } = action.payload;
      state.gptMovies = gptAllMovies;
      state.movieNames = movieNames;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, gptMovies } = movieSlice.actions;
export default movieSlice.reducer;
