import { createSlice } from "@reduxjs/toolkit";

const initialValue = { value: []};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialValue,
  reducers: {
    setBlogs: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBlogs } = blogsSlice.actions;

export default blogsSlice.reducer;
