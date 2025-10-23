import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import moviesReducer from "../features/movieSlice";
import searchToggleReducer from "../features/searchToggle";
import languageSliceReducer from "../features/languageSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    search: searchToggleReducer,
    language : languageSliceReducer
  },
});
