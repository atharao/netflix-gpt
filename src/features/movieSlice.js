import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieName: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.movieName = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;
