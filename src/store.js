import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redux app/couterslice";
import profileSlice from "./redux app/profileslice";
import productSlice from "./redux app/productSlice";
import blogsSlice from "./redux app/blogs/blogsSlice";
import recipeSlice from "./redux app/recipes/recipeSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    profile: profileSlice,
    product: productSlice,
    blogs: blogsSlice,

    recipe: recipeSlice,
  },
});
