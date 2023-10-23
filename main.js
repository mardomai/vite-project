import "./style.css";
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const recipeList = document.getElementById('recipeList');

  const displayRecipe = (recipe) => {
    const recipeItem = document.createElement('div');
    recipeItem.classList.add('card');

    const recipeName = document.createElement('h2');
    recipeName.textContent = recipe.name;

    const recipeDescription = document.createElement('p');
    recipeDescription.textContent = recipe.description;

    recipeItem.appendChild(recipeName);
    recipeItem.appendChild(recipeDescription);
    recipeList.appendChild(recipeItem);
  };

  const getRecipes = async () => {
    try {
      const response = await axios.get('https://usman-fake-api.herokuapp.com/api/recipes');
      const recipes = response.data;

      recipes.forEach((recipe) => {
        displayRecipe(recipe);
      });
    } catch (error) {
      console.error(error);
    }
  };

  getRecipes();
});
