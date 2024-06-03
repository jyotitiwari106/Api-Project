import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipeDetails } from "./recipeSlice";
import Loader from "../../loader";

const RecipeDetails = () => {
  const { recipe_id } = useParams();
  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipe.recipe);
  const isLoading = useSelector((state) => state.recipe.isLoading);
  const error = useSelector((state) => state.recipe.error);

  useEffect(() => {
    dispatch(fetchRecipeDetails(recipe_id));
  }, [dispatch, recipe_id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-5 justify-center p-4">
      <div>
        <img src={recipe.image} alt={recipe.name} className="p-4" />
      </div>
      <div className="p-4">
        <p className="flex text-xl font-bold">{recipe.name}</p>
        <p>
          <strong>Ingredients:</strong>
        </p>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="">
          <strong>Instruction:</strong>
          {recipe.instructions}
        </p>
        <p>
          <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
        </p>
        <p>
          <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
        </p>
        <p>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </p>
        <p>
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
        <p>
          <strong>Calories Per Serving:</strong> {recipe.caloriesPerServing}
        </p>
        <p>
          <strong>Tags:</strong> {recipe.tags.join(", ")}
        </p>
        <p>
          <strong>User ID:</strong> {recipe.userId}
        </p>
        <p>
          <strong>Rating:</strong> {recipe.rating}
        </p>
        <p>
          <strong>Review Count:</strong> {recipe.reviewCount}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetails;
