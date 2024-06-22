import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Recipe from "../components/Recipe";

const Favorites = () => {
  const { favoritesList } = useGlobalContext();

  if (favoritesList.length === 0) {
    return (
      <h2 className="section-title" style={{ padding: "4rem 0" }}>
        No favorite recipes yet!
      </h2>
    );
  }

  return (
    <div className="recipe-list-section">
      <h2 className="section-title">Your Favorite Recipes</h2>
      <div className="recipes-center">
        {favoritesList.map((recipe) => (
          <Recipe key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
