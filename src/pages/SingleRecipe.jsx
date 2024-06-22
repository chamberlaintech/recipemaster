import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const SingleRecipe = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const { favoritesList, handleAddToFavorites } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    async function getRecipe() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strCategory: category,
            strArea: area,
            strInstructions: instructions,
          } = data.meals[0];

          const ingredients = [];
          const measures = [];
          for (let i = 1; i <= 20; i++) {
            if (data.meals[0][`strIngredient${i}`]) {
              ingredients.push(data.meals[0][`strIngredient${i}`]);
              measures.push(data.meals[0][`strMeasure${i}`]);
            } else {
              break;
            }
          }

          const newRecipe = {
            id,
            name,
            image,
            category,
            area,
            instructions,
            ingredients,
            measures,
          };
          setRecipe(newRecipe);
        } else {
          setRecipe(null);
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    }
    getRecipe();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!recipe) {
    return (
      <h2 className="section-title" style={{ padding: "4rem 0" }}>
        No recipes to show
      </h2>
    );
  }

  const { name, image, category, area, instructions, ingredients, measures } =
    recipe;

  const isInFavorites = favoritesList.some((item) => item.id === recipe.id);

  return (
    <div className="single-recipe-section">
      <h2 className="section-title">{name}</h2>
      <div className="single-recipe">
        <img src={image} alt={name} className="recipe-image" />
        <div className="single-recipe-info">
          <div className="single-recipe-row">
            <span className="single-recipe-data">Name: </span>
            <span className="single-recipe-content">{name}</span>
          </div>
          <div className="single-recipe-row">
            <span className="single-recipe-data">Category: </span>
            <span className="single-recipe-content">{category}</span>
          </div>
          <div className="single-recipe-row">
            <span className="single-recipe-data">Cuisine: </span>
            <span className="single-recipe-content">{area}</span>
          </div>
          <div className="single-recipe-row">
            <span className="single-recipe-data">Ingredients: </span>
            <span className="single-recipe-content">
              {ingredients.map((ingredient, index) => (
                <span key={index}>
                  {ingredient} - {measures[index]}
                  <br />
                </span>
              ))}
            </span>
          </div>
          <div className="single-recipe-row">
            <span className="single-recipe-data">Instructions: </span>
            <span className="single-recipe-content">{instructions}</span>
          </div>
        </div>
      </div>
      <div className="button-container">
        <Link to="/" className="btn back-btn">
          Back Home
        </Link>
        <button
          className="btn favorites-btn"
          onClick={() => handleAddToFavorites(recipe)}
        >
          {isInFavorites ? "Remove from favorites" : "Add to favorites"}
        </button>
      </div>
    </div>
  );
};

export default SingleRecipe;
