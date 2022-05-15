import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const getBlogData = createAsyncThunk("blog/getBlogData", async () => {
  const res = await axios.get(
    "https://saurav.tech/NewsAPI/everything/cnn.json"
  );
  return {
    totalResults: res.data.totalResults,
    blogs: res.data.articles,
  };
});

const initialState = {
  loading: true,
  totalResults: 0,
  blogs: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogData.fulfilled, (state, action) => {
        state.blogs = action.payload.blogs;
        state.totalResults = action.payload.totalResults;
        state.loading = false;
      })
      .addCase(getBlogData.rejected, (state, { error }) => {
        state.loading = false;
        console.log(error);
      });
  },
});

export default blogSlice.reducer;

const baseInfo = (state: RootState) => state.blog;

export const getBlogState = createSelector(baseInfo, (blog) => blog);
