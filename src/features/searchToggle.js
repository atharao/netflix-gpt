import { createSlice } from "@reduxjs/toolkit";

const searchToggle = createSlice({
  name: "search",
  initialState: {
    searchToggleState : false
  },
  reducers:{
    toggleSearch : (state) =>{
      state.searchToggleState = !state.searchToggleState
    }
  }

})

export const {toggleSearch} = searchToggle.actions;
export default searchToggle.reducer