import './style.css';
import axios from 'axios';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Recipes</h1>
    <ul id="recipeList" class="card">
    </ul>
  </div>
`;

const getRecipes = () => {
  axios
    .get('https://usman-fake-api.herokuapp.com/api/recipes')
    .then(response => {
      const recipeList = document.querySelector('#recipeList');
      const recipes = response.data;

      // Loop through the recipes and create list items
      recipes.forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.textContent = recipe.name;
        recipeList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error(error);
    });
};

getRecipes();