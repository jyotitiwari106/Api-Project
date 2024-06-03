import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    return response.data.recipes;
  }
);

export const fetchRecipeDetails = createAsyncThunk(
  "recipe/fetchRecipeDetails",
  async (recipe_id) => {
    const response = await axios.get(
      `https://dummyjson.com/recipes/${recipe_id}`
    );
    return response.data;
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
    recipe: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchRecipeDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRecipeDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;
