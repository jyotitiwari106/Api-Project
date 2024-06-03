import { createSlice } from "@reduxjs/toolkit";

const initialValue = { value: {} };

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialValue,
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setData } = profileSlice.actions;

export default profileSlice.reducer;
