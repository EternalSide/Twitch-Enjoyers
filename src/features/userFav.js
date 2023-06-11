import { createSlice } from "@reduxjs/toolkit";
const posts = JSON.parse(localStorage.getItem("posts"));

const initialState = {
  posts: posts || [],
  length: posts?.length || 0,
  searchResults: [],
  userMobile: false,
};

export const userFav = createSlice({
  name: "userFav",
  initialState,
  reducers: {
    setNewLength: (state, action) => {
      state.length = action.payload;
    },
    setNewPosts: (state, action) => {
      state.posts = action.payload;
    },
    setSearchResultsRedux: (state, action) => {
      state.searchResults = action.payload;
    },
    setUserMobile: (state, action) => {
      state.userMobile = action.payload;
    },
  },
});

export const { setNewLength, setNewPosts, setSearchResultsRedux, setUserMobile } = userFav.actions;
export default userFav.reducer;
export const showLength = (state) => state.userFav.length;
export const showPosts = (state) => state.userFav.posts;
export const showSearchResults = (state) => state.userFav.searchResults;
export const isUserMobile = (state) => state.userFav.userMobile;
