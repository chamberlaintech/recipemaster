import React from "react";
import SearchForm from "../components/SearchFrom";
import RecipeList from "../components/RecipeList";

const Home = () => {
  return (
    <div className="home-section">
      <SearchForm />
      <RecipeList />
    </div>
  );
};

export default Home;
