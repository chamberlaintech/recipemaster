import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ id, name, category, area, image }) => {
  return (
    <div className="recipe-section">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="recipe-details">
        <h2>{name}</h2>
        <h4>{category}</h4>
        <p>{area}</p>
        <Link to={`/recipe/${id}`} className="btn recipe-btn">
          Show the recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
