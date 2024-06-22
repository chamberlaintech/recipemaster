import React, { useCallback, useContext, useEffect, useState } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [recipes, setRecipes] = useState([]);
  const [favoritesList, setFavoritesList] = useState(() => {
    const storedFavorites = localStorage.getItem("favoritesList");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { meals } = data;
      if (meals) {
        const newRecipes = meals.map((meal) => {
          const { idMeal, strMeal, strCategory, strArea, strMealThumb } = meal;
          return {
            id: idMeal,
            name: strMeal,
            category: strCategory,
            area: strArea,
            image: strMealThumb,
          };
        });
        setRecipes(newRecipes);
      } else {
        setRecipes([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchMeals();
  }, [searchTerm, fetchMeals]);

  useEffect(() => {
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
  }, [favoritesList]);

  const handleAddToFavorites = (recipe) => {
    const updatedFavorites = [...favoritesList];
    const index = updatedFavorites.findIndex((item) => item.id === recipe.id);
    if (index === -1) {
      updatedFavorites.push(recipe);
    } else {
      updatedFavorites.splice(index, 1);
    }
    setFavoritesList(updatedFavorites);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        recipes,
        favoritesList,
        handleAddToFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
