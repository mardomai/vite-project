import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';
import axios from 'axios';

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  <div class="card">
     <img id="catImage" src="" alt="Cat Image"/>
     <button id="counter" type="button"></button>
 </div>
  </div>
`;

const getUsers = () => {
  axios
    .get('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      // Handle the response here
      const catImageElement = document.querySelector('#catImage');
      
      // Set the src attribute of the img element to the image URL
      catImageElement.src = response.data[0].url;
      
      // Set alt text for the image
      catImageElement.alt = 'Cat Image';
    })
    .catch(error => {
      console.error(error);
    });
};

getUsers();
setupCounter(document.querySelector('#counter'));

import { fakestoreAPI } from "./fakeStoreService";

export const getProducts = async () => {
  try {
    const response = await fakestoreAPI.get("/products");
    return response.data;
  } catch (error) {
      console.log(error.response.data.messeage);
  }

};


export const getProductByID = async (product_id) => {
  try {
    const response = await fakestoreAPI.get('/products/$');
    return response.data;
  } catch (error) {
      console.log(error.response.data.messeage);
  }

};

export const createProduct = async (data) => {
  try {
    
  }
}