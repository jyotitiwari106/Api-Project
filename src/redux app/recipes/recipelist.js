import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "./recipeSlice";
import { Link } from "react-router-dom";
const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes);
  const isLoading = useSelector((state) => state.recipe.isLoading);
  const error = useSelector((state) => state.recipe.error);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4 ">
      {recipes?.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded shadow">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-xl font-bold mt-2">{recipe.name}</h2>
          <Link
            to={`/recipes/${recipe.id}`}
            className="text-blue-500 mt-2  inline-block"
          >
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
