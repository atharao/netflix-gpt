import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        comedyMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;

        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addComedyMovies:(state,action)=>{
            state.comedyMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addPopularMovies,addTopRatedMovies ,addComedyMovies,addUpcomingMovies, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;