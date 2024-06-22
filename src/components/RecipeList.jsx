import React from "react";
import Recipe from "./Recipe";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const RecipeList = () => {
  const { recipes, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (recipes.length < 1) {
    return <h2 className="section-title">No recipes matched</h2>;
  }
  return (
    <div className="recipe-list-section">
      <h1 className="section-title">Recipes</h1>
      <div className="recipes-center">
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
    </div>
  );
};

export default RecipeList;
