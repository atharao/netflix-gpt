import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "eng",
  },
  reducers: {
    selectLang: (state, action) => {
      state.lang = action.payload
    },
  },
});

export const {selectLang} = languageSlice.actions;
export default languageSlice.reducer
